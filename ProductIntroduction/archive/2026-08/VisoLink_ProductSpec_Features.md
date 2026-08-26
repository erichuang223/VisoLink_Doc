# VisoLink 產品功能全覽規格書

> **版本**：v1.0  
> **建立日期**：2026-06-21  
> **用途**：PPT 母文件 — 涵蓋系統所有功能細節，供各版本（業務銷售版 / 技術說明版）改編使用  
> **截圖標注**：文中以 `【此處放截圖：XXX】` 標示需補圖位置

---

## 目錄

1. [系統定位](#一系統定位)
2. [系統架構組成](#二系統架構組成)
3. [畫布編輯器 Studio](#三畫布編輯器-studio)
4. [Symbol 元件庫](#四symbol-元件庫)
5. [資料來源 Connector](#五資料來源-connector)
6. [DataBinding 資料綁定系統](#六databinding-資料綁定系統)
7. [計算引擎 Calculations](#七計算引擎-calculations)
8. [工業 SVG 圖形符號庫 Graphic Library](#八工業-svg-圖形符號庫-graphic-library)
9. [即時資料與時間系統](#九即時資料與時間系統)
10. [Popup Trend 累積趨勢比較器](#十popup-trend-累積趨勢比較器)
11. [Runtime 操作員檢視介面](#十一runtime-操作員檢視介面)
12. [Admin 管理後台](#十二admin-管理後台)
13. [多語系支援 Localization](#十三多語系支援-localization)
14. [認證與安全機制](#十四認證與安全機制)
15. [資料庫 Schema](#十五資料庫-schema)
16. [REST API 端點清單](#十六rest-api-端點清單)
17. [部署架構](#十七部署架構)
18. [技術選型完整清單](#十八技術選型完整清單)

---

## 一、系統定位

### 1.1 核心問題

工業現場普遍已部署大量資訊系統與設備：

- **設備控制層**：PLC、DCS、SCADA
- **資料收集層**：Historian（如 OSIsoft PI Server）、IoT 平台
- **業務管理層**：MES、ERP
- **分析層**：AI 分析系統

這些系統每天持續產生大量數據。然而大多數企業真正面臨的問題並不是沒有數據，而是：

> **數據已經存在，但無法快速轉換成現場需要的資訊畫面。**

改一張監控畫面，往往需要排工單、等廠商、等上線視窗，費時數週。  
最懂現場的人（製程工程師、中控室工程師、設備工程師、生產主管）反而沒有工具可以自己動手。

### 1.2 VisoLink 解決方案

VisoLink 是一套**工業 SCADA 視覺化平台**，同時具備：

- **自由畫布設計能力**（對標 PI Vision 的操作體驗）
- **多資料來源整合彈性**（對標 Grafana 的資料庫連接廣度）

讓真正懂現場的工程師，能夠自己設計、即時修改監控畫面，不依賴外部廠商。

### 1.3 競品功能對比

| 能力 | PI Vision | Grafana | VisoLink |
|------|-----------|---------|----------|
| 自由畫布（像 Visio 一樣放置、移動、縮放元件） | ✅ | ❌ 版面固定 | ✅ |
| 多資料庫支援 | ❌ 僅 PI Server | ✅ | ✅ |
| 工業 SVG 符號庫（ISA-101） | ✅ | ❌ | ✅ |
| 跨來源計算引擎 | 有限 | 有限 | ✅ |
| Web-based 無需安裝 Client | ❌ | ✅ | ✅ |
| 自行部署 | ❌ | ✅ | ✅ |
| 多語系 Admin 線上維護 | ❌ | 有限 | ✅ |

---

## 二、系統架構組成

### 2.1 Solution 分層架構（Clean Architecture）

```
VisoLink.sln
├── VisoLink.Client          ← Blazor WebAssembly（Studio + Runtime 前端）
├── VisoLink.Server          ← ASP.NET Core Web API（RESTful）
├── VisoLink.Admin           ← Razor Pages Admin 後台（獨立 Website）
├── VisoLink.Domain          ← 純 C# 實體（不依賴 EF Core）
├── VisoLink.Application     ← 業務邏輯介面與 DTO（不依賴 EF Core 實作）
├── VisoLink.Infrastructure  ← EF Core、Migrations、所有第三方 Connector 實作
└── VisoLink.Shared          ← 前後端共用契約（DTO / Enum）
```

**分層原則**：
- Domain 不依賴任何外部框架
- Application 只依賴 Domain，不直接參考 EF Core 實作
- Infrastructure 實作 Application 定義的 Interface（Connector / Repository）
- Client 透過 HTTP 呼叫 Server API，不共用 C# 物件

### 2.2 前端三大區域

| 區域 | URL 前綴 | 使用者 | 說明 |
|------|---------|--------|------|
| **Studio（列表 + 編輯）** | `/displays`、`/editor` | 工程師 | 建立 / 編輯 Display |
| **Runtime（瀏覽）** | `/runtime` | 操作員 | 只讀監看即時數據 |
| **Admin（管理）** | 獨立 port 6002 | 系統管理員 | 後台管理，Razor Pages 獨立部署 |

【此處放截圖：系統三大入口頁面切換示意圖】

### 2.3 資料流程

```
① Admin 設定 DataSource（連線資訊以 DataProtection AES 加密儲存）
         ↓
② Studio 工程師建立 Display，設定 DataBinding（選 DataSource → View → Fields）
         ↓
③ 儲存 DisplayJson（PostgreSQL jsonb 欄位）
         ↓
④ Runtime 載入 Display → RuntimeQueryScheduler 排程執行 DataBinding 查詢
         ↓
⑤ IDataSourceDriver.QueryAsync → 外部 DB / PI Server / InfluxDB
         ↓
⑥ VisoDataFrame { Columns[], Rows[][] } → RuntimeDataStore
         ↓
⑦ Symbol 訂閱 RuntimeDataStore 更新 → 畫面即時刷新
```

### 2.4 服務端口（Docker 部署）

| 服務 | 說明 | Port |
|------|------|------|
| API Server | ASP.NET Core Web API | 6000 |
| Blazor Client | Blazor WASM（Studio + Runtime） | 6001 |
| Admin | Razor Pages 後台 | 6002 |
| pgAdmin | PostgreSQL Web 管理介面 | 6050 |
| PostgreSQL | 資料庫（容器外部存取） | 65433 |

---

## 三、畫布編輯器 Studio

【此處放截圖：Studio 編輯器完整介面（畫布 + 左側面板 + 右側屬性面板）】

### 3.1 介面布局

| 區域 | 位置 | 功能 |
|------|------|------|
| **工具列** | 頂部 | 模式切換（選取/繪製）、縮放、Grid、Undo/Redo、儲存、Preview |
| **Symbol 面板** | 左側 Tab：Elements | 所有可放置的 Symbol 元件清單 |
| **Graphic Library 面板** | 左側 Tab：Graphics | 工業 SVG 符號庫瀏覽與搜尋 |
| **Data Panel** | 左側 Tab：Data | DataBinding 管理、欄位瀏覽、Calculations 管理 |
| **畫布 Canvas** | 中央 | 自由拖放工作區 |
| **屬性面板** | 右側（依需要展開） | 選取物件的屬性設定（5 大類 Accordion） |

### 3.2 畫布操作能力

**物件放置與選取**
- 從 Symbol 面板拖曳放置到畫布任意位置
- 從 Graphic Library 拖曳 SVG 符號到畫布（依 SVG 內容比例縮放）
- 單擊選取單一物件；框選選取多個物件
- 多選後可群組移動
- 重疊物件依視覺最上層（ZIndex）優先選取（Hit-Test 排序）

**物件尺寸與位置**
- 拖曳控制點縮放
- 拖曳物件移動
- 鍵盤方向鍵微調位置（1px 精度）
- 屬性面板直接輸入 X / Y / Width / Height 數值

**旋轉**
- 拖曳旋轉控制點自由旋轉
- 屬性面板輸入精確角度

**翻轉**
- 水平翻轉 / 垂直翻轉

**Z 層管理**
- 移到最前 / 移到最後 / 上移一層 / 下移一層

**複製 / 貼上 / 刪除**
- Ctrl+C / Ctrl+V / Delete

**Undo / Redo**
- 完整命令堆疊，支援多步回復

### 3.3 Shift 約束系統（Shift Constraint）

按住 Shift 鍵時，所有操作套用以下約束：

| 操作 | Shift 約束效果 |
|------|--------------|
| **移動物件** | 鎖定為水平或垂直方向移動 |
| **縮放物件** | 鎖定等比例縮放（長寬比不變） |
| **繪製 Shape** | 矩形 → 正方形；橢圓 → 正圓；Line → 0°/45°/90° 鎖定 |
| **旋轉物件** | 鎖定為 15° 倍數角度 |
| **移動 Connector 端點** | 鎖定水平或垂直吸附 |
| **連接線中間段拖曳** | 鎖定正交方向 |

### 3.4 Smart Connector Line

Smart Connector 是介於圖形連接線與流程圖連接箭頭之間的進階功能：

**Connector 模式**
- **Orthogonal（直角折線）**：自動計算直角路徑，可拖曳中間線段調整走向
- **Bezier（貝茲曲線）**：平滑曲線，控制點以比例方式儲存（兩端距離變化時曲線等比維持）
- **Direct（直線）**：傳統端點對端點直線

**吸附功能**
- 拖曳 Connector 端點可吸附到其他 Symbol 的 Connection Points（上/下/左/右/中心）
- 被連接的 Symbol 移動或縮放時，Connector 端點自動跟隨更新

**樣式設定**
- 線條顏色、粗細
- 實線 / 虛線（可設定虛線間隔）
- 起點 / 終點箭頭樣式（無 / 實心 / 空心 / 細箭頭）

【此處放截圖：Smart Connector 直角折線 + 吸附示意】

### 3.5 屬性面板 5 大類 Accordion

| 類別 | 涵蓋設定 |
|------|---------|
| **Position & Size** | X、Y、Width、Height、Rotation、Lock |
| **Appearance** | Fill Color、Stroke Style、Opacity（透明度）、Corner Radius、Shadow |
| **Data** | DataBinding 指派、Field Mapping、Calculation 指派 |
| **Behavior** | URL Link、Double-Click 行為 |
| **Advanced** | ZIndex、Symbol 類型特定設定 |

---

## 四、Symbol 元件庫

> VisoLink 提供 **12 種 Symbol 類型**，分為四大類別：

### 4.1 SHAPES 類別

**Rect（矩形）**
- Fill Color（填充色）
- Stroke：樣式（實線/虛線/點線/長短線）、粗細、顏色
- Stroke 流動動畫（邊框線流動效果，可設定速度）
- 透明度（Opacity）
- 四角 Radius 獨立設定（左上/右上/左下/右下 各自不同圓角）

**Ellipse（橢圓/正圓）**
- Fill Color、Stroke 完整設定
- Stroke 流動動畫
- 透明度

**Line（直線）**
- 頭部 / 尾部箭頭樣式（無 / 實心 / 空心 / 細箭頭）
- Stroke 樣式與粗細
- 無 Fill、無 Radius

**Arc（弧形）**
- 起始角度（Start Angle）：0°～360° 自由設定
- 結束角度（End Angle）：0°～360° 自由設定
- Fill Color、Stroke 設定
- 應用：扇形儀表背景、半圓形裝飾框

**Polygon（多邊形）**
- 邊數設定（3 邊三角形 ～ N 邊多邊形，可自訂）
- Fill Color、Stroke 設定
- Stroke 流動動畫

【此處放截圖：SHAPES 類別各元件展示（含 Stroke 動畫效果）】

---

### 4.2 TEXT & MEDIA 類別

**Text（文字）**
- 靜態文字顯示，或綁定 DataBinding 欄位動態顯示
- 字型大小、顏色、粗體/斜體/底線
- Stroke 外框設定（樣式 / 粗細 / 顏色 / 動畫）
- 透明度

**Image / SVG**
- 上傳自訂圖片（JPG / PNG / GIF / SVG / WebP）
- 圖片儲存於伺服器 `/uploads` 目錄，nginx 反向代理提供服務
- 支援 Inline SVG（SVG 直接渲染，保留向量品質）
- Stroke 外框設定
- 透明度

**URL Link**
可套用於 Text 或 Image 元件，設定點擊行為：
- 模式一：**外部 URL**（輸入完整網址）
- 模式二：**跳轉其他 Display**（從 Display 清單選取）
- 開啟方式：當前分頁 / 新分頁

---

### 4.3 DATA 類別（資料符號）

#### Value Symbol
- 顯示 DataBinding 中指定 Field 的純量值
- 支援數值、文字、狀態值
- 字型樣式、對齊、顏色設定
- 單位標示設定
- 支援 Popup Trend（Runtime 雙擊觸發）

【此處放截圖：Value Symbol Runtime 即時顯示效果】

---

#### Multi-State Symbol
透過「值 → 狀態」映射，改變物件的顏色或圖示：

| 設定項目 | 說明 |
|---------|------|
| DataBinding + valueField | 監看哪個欄位的值 |
| 狀態規則列表 | 每條規則：條件（等於 / 大於 / 範圍）→ 顏色 + Label |
| 顯示模式 | 僅顏色 / 顯示 Label 文字 / 更換 SVG 圖示 |
| 默認狀態 | 無符合規則時的外觀 |

應用場景：設備運轉/停機/異常顏色判斷、閥門開/關狀態顯示

【此處放截圖：Multi-State Symbol 設備狀態顯示示意（三種顏色狀態）】

---

#### Gauge Symbol（儀表）

支援 **6 種樣式 Preset**，一鍵切換，切換後可進一步自訂：

| Preset 樣式 | 說明 |
|------------|------|
| **Basic Needle** | 經典圓形儀表盤 + 指針 |
| **Progress Needle** | 弧形進度背景 + 指針 |
| **Progress Clean** | 純弧形進度條（無指針） |
| **Stage / Color Zone** | 分色區段（正常/警戒/危險） |
| **Temperature** | 溫度計風格垂直進度 |
| **Barometer 雙刻度** | 同一儀表顯示內外兩組刻度 |

**通用設定項目**
- 量程（Min / Max）
- 分格數（大刻度 split number / 小刻度 minor split number）
- 進度條寬度 / 軸線寬度
- Label 距離（防裁切）
- 中心點 X/Y 位移、半徑百分比（精確佈局控制）
- 色區設定：每個區段的起止百分比 + 顏色
- 文字顏色、刻度顏色、指針顏色
- 動態值：綁定 DataBinding 欄位

【此處放截圖：6 種 Gauge 樣式 Preset 並排展示】

---

#### Trend Symbol（趨勢圖）

基於 **Apache ECharts**，支援工業級時間序列趨勢展示：

**顯示模式（4 種）**
| 模式 | 說明 |
|------|------|
| LINE | 折線圖（默認） |
| POINT | 散點圖 |
| BAR | 柱狀圖（時間序列） |
| AREA | 面積圖（折線填色） |

**多系列支援**
- 每個 Trend Symbol 可設定多組 Series（資料系列）
- 每組 Series 可綁定不同 DataBinding + Field
- 各 Series 可獨立設定顏色、線寬、顯示名稱

**雙 Y 軸**
- 左 Y 軸、右 Y 軸各自設定量程
- 每個 Series 可指派到左 Y 或右 Y

**Threshold Band（警戒帶）**
- 可設定一條或多條警戒色帶（如：正常綠 / 警戒黃 / 危險紅）
- 以半透明色條覆蓋於圖表背景

**Reference Line（參考線）**
- 水平參考線（如目標值線、上限線、下限線）

**Series Rule（動態系列生成）**
- 從 DataBinding 資料行自動生成多條系列線（適合每筆資料代表一個設備的情境）

**互動功能（Runtime）**
- Zoom（框選縮放時間區間）
- Crosshair（垂直準線 + Tooltip 顯示各系列值）
- Editor Runtime Preview（編輯模式下一次性快照預覽，確認樣式）

【此處放截圖：Trend Symbol 多系列 + 雙 Y 軸 + Threshold Band 效果】

---

#### Table Symbol（表格）

| 設定項目 | 說明 |
|---------|------|
| 欄位設定 | 每欄：Field 名稱、顯示 Header、欄寬 |
| 排序 | 點擊 Header 升/降排序 |
| 分頁 | 設定每頁筆數 |
| 格式化 | 數值格式化（小數位數） |
| 條件樣式 | 結合 Multi-State 規則，欄位值符合條件時套用顏色 |

---

#### Bar Chart Symbol（橫條/柱狀圖）

基於 **Apache ECharts**：
- 垂直柱狀圖（默認）
- 支援多系列並排或堆疊（Stacked）
- X 軸：類別軸（Category）或時間軸
- Y 軸量程設定
- 顏色、Label 顯示設定

---

#### ProgressBar Symbol

| 設定項目 | 說明 |
|---------|------|
| 方向 | 水平 / 垂直 |
| 刻度顯示 | 顯示 / 隱藏刻度線 + 數值 |
| 段落顏色 | 多段顏色（如 0-50% 綠、50-80% 黃、80-100% 紅） |
| 值計算模式 | Last / First / Median / Average（從時間序列取代表值） |
| 量程 | Min / Max 設定 |

---

## 五、資料來源 Connector

> 每個 Symbol 可獨立綁定不同 DataSource，不同 DataSource 可以同時存在於同一個 Display。

### 5.1 Connector 架構

所有 Connector 統一實作 `IDataSourceDriver` 介面：

```
IDataSourceDriver.QueryAsync(dataBinding, timeRange)
    → VisoDataFrame { Columns: string[], Rows: object[][] }
```

Driver 只負責取得資料並正規化格式，不涉及 UI 或 Symbol 邏輯。  
所有查詢由 `RuntimeQueryScheduler` 根據全域時間範圍統一觸發。

### 5.2 SQL Server Connector

- Type：`SqlServer`
- 查詢方式：自訂 SQL（時間序列查詢）
- Schema Browser：瀏覽資料庫 Table → Column → 點擊插入到查詢 → 一鍵生成 SELECT 模板
- DiscoverFields：`SELECT TOP 0` 取得欄位清單不載入資料
- Admin 設定：Server、Port（1433）、Database、Username/Password

### 5.3 MySQL Connector

- Type：`MySQL`
- 查詢方式：自訂 SQL
- Schema Browser（同 SQL Server）
- 連線設定：Host、Port（3306）、Database、Username/Password
- 切換類型時 Port 自動填入正確默認值

### 5.4 PostgreSQL Connector

- Type：`PostgreSQL`
- 查詢方式：自訂 SQL（與 VisoLink 系統 DB 同類型，可直接連應用資料庫）
- Schema Browser（同 SQL Server）
- 連線設定：Host、Port（5432）、Database、Username/Password

### 5.5 InfluxDB Connector（三種獨立類型）

InfluxDB 有三種不同查詢語言，各自作為獨立 DataSource 類型：

| 類型 | 查詢語言 | 適用版本 |
|------|---------|---------|
| `InfluxDB_InfluxQL` | InfluxQL（類 SQL 語法） | InfluxDB 1.x / 2.x |
| `InfluxDB_Flux` | Flux（函數式管線語法） | InfluxDB 2.x |
| `InfluxDB_SQL` | SQL（Arrow Flight SQL） | InfluxDB 3.x |

**View 模式（每種 InfluxDB 類型均支援）**
| 模式 | 說明 |
|------|------|
| **簡易模式** | 選擇 Measurement / Bucket，勾選 Fields |
| **腳本模式** | 直接編寫完整查詢語句 |

**連線測試**：Admin 介面提供 TestConnection 按鈕，即時驗證連線可用性與認證

【此處放截圖：InfluxDB Admin 設定面板（含類型切換 + 認證設定）】

### 5.6 easyPI / PIBridge Connector（OSIsoft PI Server）

easyPI 是 OSIsoft PI Server 的 REST API 代理服務。VisoLink 後端呼叫 easyPI，不直接存取 PI Server。

**支援的 PI 資料模式**

| 模式 | 說明 |
|------|------|
| **PI Tag - Recorded** | PI Tag 歷史記錄值（實際存檔點） |
| **PI Tag - Interpolated** | PI Tag 補插值（按等間隔時間點） |
| **PI AF - Recorded** | PI AF Attribute 歷史記錄值 |
| **PI AF - Interpolated** | PI AF Attribute 補插值 |

**Tag 瀏覽與搜尋**
- Admin DataBinding 介面提供 Tag 名稱搜尋（支援萬用字元）
- 搜尋結果顯示 Tag 描述、工程單位

**AF 元素瀏覽**
- 樹狀 AF Database 瀏覽器（逐層展開 Element / Attribute）
- 支援跨層路徑選取

**Bulk Selection（批次選取）**
- 一次選取多個 Tag 或 AF Attribute，批次建立 DataBinding

**DisplayName**
- 設定 Tag 的友善顯示名稱，Runtime 顯示 DisplayName 而非原始 Tag 路徑

**Runtime Time Range 整合**
- Trend 查詢時間範圍跟隨 Runtime 全域時間 Filter
- 全域時間變更時，easyPI 查詢自動重新觸發

【此處放截圖：easyPI AF 瀏覽器 + Tag 搜尋介面】

### 5.7 Mock Connector（開發測試）

- Type：`Mock`
- 提供 9 種預設情境 View（含 Trend.Multi / Gauge / Table 等情境）
- 回傳固定或隨機模擬資料
- 用於系統開發測試與 Display 設計時的資料預覽
- 不需要外部 DB 連線

---

## 六、DataBinding 資料綁定系統

### 6.1 基本概念

DataBinding 是 Symbol 與 DataSource 之間的橋樑：

```
Symbol
  └── DataBinding（可有多個）
        ├── DataSource（連哪個 DB / API）
        ├── View（查哪張表 / 哪個查詢）
        ├── Fields（用哪些欄位）
        └── bindingType（tag_ref / af_ref / af_relative / query）
```

一個 Symbol 可同時擁有**多個 DataBinding**，每個 DataBinding 可以連接不同的 DataSource。

### 6.2 DataSource View

View 是 DataSource 下的查詢單元：
- 每個 DataSource 可定義多個 View
- View 定義：查詢 SQL / 查詢腳本 / Tag 列表 / AF 路徑
- View 可設定欄位清單，每個欄位有：`FieldName`（真實名）、`DisplayName`（友善名）、`Unit`（工程單位）

**View 預覽功能**
- Admin 介面每個 View 提供「眼睛」預覽按鈕
- 顯示前 5 筆資料（欄位形狀徽章 + 資料表格）
- 讓工程師在設定前確認查詢結果

### 6.3 Field Mapping 綁定類型

| bindingType | 說明 |
|------------|------|
| `tag_ref` | 直接引用 PI Tag 名稱 |
| `af_ref` | 直接引用 PI AF Attribute 絕對路徑 |
| `af_relative` | 相對路徑（用於 Collection Symbol，Phase 4） |
| `query` | SQL / 查詢腳本，標準欄位映射 |

### 6.4 Field 下拉選單

在 Studio 屬性面板設定 Field 時：
- 系統自動讀取 View 的欄位清單
- 顯示 `DisplayName（FieldName）[Unit]` 格式
- 從下拉選單選取，避免手動輸入錯誤
- 欄位快取在 Editor session 中，減少重複 API 請求

### 6.5 Schema Browser（Admin）

- 呈現 DataSource 的完整資料庫結構（Table / Column 樹狀）
- 點擊 Column 名稱 → 自動插入到 SQL 編輯器光標位置
- 一鍵生成 `SELECT * FROM TableName` 模板
- 適用：SQL Server / MySQL / PostgreSQL

### 6.6 Data Panel（Studio 左側）

- 顯示目前 Display 的所有 DataBinding 樹狀清單
- 支援搜尋（Binding name / Field name / DisplayName / Calculation name）
- 支援從 Data Panel 直接**拖曳 Field 到畫布上的 Symbol**，自動完成 Field Mapping
- Calculations 區塊獨立顯示（不混在 DataBinding 清單中）

---

## 七、計算引擎 Calculations

### 7.1 概念定義

Calculation 是定義在**單一 Symbol 層級**的計算欄位。  
它引用一或多個 DataBinding 的欄位，透過公式產生新的**虛擬欄位**，供 Symbol 的 Field Mapping 使用。

```
Symbol DataBinding：
  DB1 = Pump_Flow    （每 1 分鐘查詢一次）
  DB2 = Pump_Status  （每 5 分鐘查詢一次）

Calculations：
  Calc.EfficiencyPct = DB1.FlowRate / DB1.MaxFlow * 100
  Calc.TempF         = DB1.TempC * 1.8 + 32
  Calc.StatusLabel   = IF(DB2.Status == 1, "Running", "Stopped")

Symbol valueField = Calc.EfficiencyPct   ← 選計算欄位而非原始欄位
```

### 7.2 支援的公式類型

| 類型 | 功能 |
|------|------|
| **數學運算** | `+`, `-`, `*`, `/`, `^`（次方）, `sqrt()`, `abs()`, `round()`, `floor()`, `ceil()` |
| **條件式** | `IF(condition, true_val, false_val)`，可巢狀 |
| **字串處理** | 字串連接、`substring()`, `format()` |
| **比較運算子** | `==`, `!=`, `>`, `>=`, `<`, `<=` |
| **邏輯運算子** | `AND`, `OR`, `NOT` |

### 7.3 跨 DataBinding 引用

一個 Calculation 可引用多個 DataBinding 的欄位：
- 語法：`DB1.FieldA + DB2.FieldB`
- 必須指定一個 **Primary DataBinding** 作為時間軸基準
- 其他 DataBinding 的值以「最近已知值」（Last-Known-Value）填入
- 若某時間點無資料，對應欄位為 null，公式結果亦為 null

### 7.4 Calculation Panel

Studio 屬性面板中的 Calculation 管理介面：
- 新增 / 編輯 / 刪除 Calculation 定義
- 公式輸入框（支援語法高亮）
- 「↺ 刷新」按鈕：重新載入 DataBinding 欄位清單
- Calculation 完成後，Field Mapping 選單中會出現 `Calc.XXX` 可選項

### 7.5 多 DataSource 欄位合成

支援來自**不同資料庫**的欄位在同一 Symbol 的 Calculation 中使用：
- DB1 可以是 InfluxDB（感測器數據）
- DB2 可以是 PostgreSQL（設備設定值）
- Calculation 自動處理時間對齊

---

## 八、工業 SVG 圖形符號庫 Graphic Library

### 8.1 概覽

| 項目 | 內容 |
|------|------|
| 符號總數 | 226+ 個工業 SVG 符號（manifest v3.2） |
| 類別數量 | 21 大類 |
| 設計規範 | ISA-101 工業 HMI 視覺標準 |
| 格式 | 純 SVG（向量，縮放無失真） |

### 8.2 符號類別清單（21 類）

| # | 類別 | 說明 |
|---|------|------|
| 1 | **Pumps** | 各式泵浦（離心泵、潛水泵、齒輪泵…） |
| 2 | **Valves** | 各式閥門（蝶閥、球閥、截止閥、安全閥…） |
| 3 | **Tanks & Vessels** | 儲槽、壓力容器、反應槽 |
| 4 | **Instruments** | 流量計、壓力計、溫度計、液位計 |
| 5 | **Motors & Drives** | 馬達、變頻器、伺服驅動器 |
| 6 | **Heat Exchangers** | 板式、殼管式、空冷式熱交換器 |
| 7 | **Filters** | 過濾器、袋式過濾、膜過濾 |
| 8 | **Compressors & Blowers** | 壓縮機、鼓風機 |
| 9 | **Sensors** | 各式感測器、傳送器 |
| 10 | **Process Lines** | 管線、流向箭頭 |
| 11 | **Electrical** | 斷路器、接觸器、電源符號 |
| 12 | **Control** | PLC、DCS、控制器、調節閥 |
| 13 | **Safety** | 緊急停止、安全閥、洩壓裝置 |
| 14 | **Water & Wastewater** | 水處理設備、曝氣池、沉澱池 |
| 15 | **Operator Interface** | 操作面板、HMI、警示燈 |
| 16 | **Common Valve Symbols** | 標準閥門圖例符號（常用閥門速查） |
| 17 | **Equipment** | 通用設備對應符號 |
| 18 | **Agitators** | 攪拌機 |
| 19 | **Separators** | 分離器、旋風分離 |
| 20 | **Conveyors** | 輸送帶、螺旋輸送機 |
| 21 | **General Process** | 通用製程符號 |

### 8.3 使用方式

1. 在 Studio 左側面板切換到 **Graphics Tab**
2. 瀏覽類別或使用**關鍵字搜尋**符號名稱
3. 直接**拖曳符號到畫布**
4. 放置時依 SVG 內容的長寬比自動縮放（不變形）
5. 放置後可繼續調整尺寸、旋轉、顏色覆蓋

### 8.4 SVG 技術規格

- 純 SVG 格式，無外部字型依賴
- ISA-101 色彩風格（高對比 HMI 配色，非 3D 裝飾風格）
- 向量格式，從縮圖到大型顯示板皆清晰
- 快取控制：nginx 設定 no-store manifest，no-cache SVG，支援 cache-busting

【此處放截圖：Graphic Library 面板 — 類別瀏覽 + 搜尋 + 拖曳示意】

---

## 九、即時資料與時間系統

### 9.1 全域時間 Filter

Runtime 與 Studio 均有頂部**全域時間 Filter**：

- 設定「開始時間」與「結束時間」
- 設定後，Display 內**所有 Symbol 的查詢同步套用**相同時間範圍
- 不需對每個 Symbol 個別設定時間

### 9.2 時間表達式語法

支援以下速記符號，方便快速設定常用時間範圍：

| 表達式 | 意義 |
|--------|------|
| `*` | 當前時間（Now） |
| `-1h` | 現在往前 1 小時（可換 `m`=分、`d`=天） |
| `-8h` | 現在往前 8 小時 |
| `t` | 今天 00:00:00（Today Start） |
| `y` | 昨天 00:00:00（Yesterday Start） |
| 絕對時間 | `2026-06-21 08:00:00` |

**常見組合**：
- 當班監看（最近 8 小時）：開始 `-8h`，結束 `*`
- 今日趨勢：開始 `t`，結束 `*`
- 昨日班別分析：開始 `y`，結束 `t`

### 9.3 Auto-Refresh 自動更新

- 在全域 Filter 設定自動刷新間隔（如 30 秒、1 分鐘、5 分鐘）
- 系統自動重新查詢所有 Symbol 的 DataBinding
- 適合中控室長期監看，不需手動按重新整理

### 9.4 RuntimeQueryScheduler

後端統一查詢排程器：
- 根據全域時間範圍，對每個 DataBinding 呼叫對應 Connector
- 回傳 `VisoDataFrame`（統一格式），Symbol 訂閱並更新渲染
- 查詢異常時不中斷其他 DataBinding，各自獨立容錯

---

## 十、Popup Trend 累積趨勢比較器

### 10.1 概念

Popup Trend 是 Runtime 模式下的**全域趨勢比較機制**，讓操作員不需離開監控畫面即可進行多個資料點的趨勢對比。

### 10.2 操作流程

```
在 Runtime 畫面，對任意 Symbol 雙擊
  → 該 Symbol 的資料點（Tag / Field）加入「比較清單」
  → 自動開啟全螢幕 Popup 趨勢圖
  → 顯示清單中所有資料點的趨勢（可同時多條線）

按「返回」→ 回到 Display，清單保留
再次雙擊另一個 Symbol → 加入第二個資料點
Popup 自動顯示兩條趨勢線（累積效果）

按「清除」→ 清空比較清單，回到 Display
```

### 10.3 技術特性

- 雙擊觸發，**無需額外設定**，所有 Symbol 自動支援
- 同一資料點重複雙擊：略過，不重複加入
- 趨勢圖時間範圍**跟隨全域時間 Filter**（調整時間等同調整所有比較趨勢的時間軸）
- 支援 LINE / POINT / BAR / AREA 四種顯示模式切換
- 可單獨移除清單中的特定資料點（不清除全部）
- 僅 Runtime 模式有效；Editor 模式下雙擊無此效果

**支援觸發的 Symbol 類型**

| Symbol | 加入的資料 |
|--------|----------|
| Value | valueField 欄位 |
| Gauge | valueField 欄位 |
| Multi-State | valueField 欄位 |
| ProgressBar | valueField 欄位 |

【此處放截圖：Popup Trend 全螢幕覆蓋效果 — 三條趨勢線累積比較】

---

## 十一、Runtime 操作員檢視介面

### 11.1 功能定位

Runtime 是給**操作員**使用的只讀監看介面：
- 無法編輯 Display 內容
- 即時顯示所有 Symbol 的當前資料
- 支援 Popup Trend
- 支援全域時間 Filter 調整

### 11.2 Display 管理（列表頁）

**資料夾樹狀結構**
- 支援巢狀資料夾（無限層）
- 左側展開/收合資料夾樹

**Display 卡片功能**
- 顯示 Display 名稱、縮圖（最後儲存時的畫面快照）
- 星號收藏（加入個人 Favorites 清單）
- 最近瀏覽記錄（Recent 清單）

**搜尋**
- 全站 Display 名稱搜尋

**版本歷史**
- 每個 Display 自動保存最近 5 個版本快照
- 可查看歷史版本（含快照縮圖）

---

## 十二、Admin 管理後台

Admin 後台為**獨立部署的 Razor Pages + Metronic 介面**（port 6002），系統管理員專用。

【此處放截圖：Admin 後台首頁 Dashboard】

### 12.1 DataSource 管理

| 功能 | 說明 |
|------|------|
| DataSource CRUD | 新增 / 編輯 / 刪除 / 停用 DataSource |
| 類型切換 | SQL Server / MySQL / PostgreSQL / InfluxDB（3種）/ easyPI / Mock |
| 類型感知面板 | 切換類型時，設定面板自動顯示該類型專屬欄位（如 Port 自動填入正確默認值） |
| 連線測試 | TestConnection 按鈕，即時驗證連線可用性 |
| 安全儲存 | 連線資訊敏感欄位（密碼）以 ASP.NET Core DataProtection 加密儲存，不回傳前端 |
| View 管理 | 每個 DataSource 下管理多個 View（查詢定義）|
| View 預覽 | 每個 View 提供「眼睛」按鈕，顯示前 5 筆資料預覽 |
| Schema Browser | SQL DataSource 提供資料庫結構瀏覽器（Table → Column → 點擊插入） |

【此處放截圖：DataSource 設定面板（MySQL 類型示意）】

### 12.2 使用者管理

| 功能 | 說明 |
|------|------|
| 使用者 CRUD | 新增 / 編輯 / 停用使用者帳號 |
| 角色指派 | 將使用者指派至一個或多個 Role |
| Soft Delete | 停用帳號（不實際刪除，保留歷史記錄） |
| Email / 帳號設定 | 使用者名稱、Email、密碼重設 |

### 12.3 角色管理（Role）

- 新增 / 編輯 / 刪除角色
- 角色為權限的基本單位（Permission Phase 完整實作後擴充）
- 目前系統運作於**開放模式**（所有已登入使用者均可存取）

### 12.4 資料夾與 Display 管理

- 資料夾 CRUD（名稱、父層位置）
- Display 列表（標題、擁有者、建立時間、最後更新）
- Display 轉移擁有者

### 12.5 圖片上傳管理

- 管理所有已上傳的圖片檔案（JPG / PNG / GIF / SVG / WebP）
- 支援大型圖片（nginx `client_max_body_size` 設定）
- 上傳後由 nginx `/uploads` 反向代理提供存取
- 圖片列表：檔名、大小、上傳時間、預覽縮圖
- 刪除未使用圖片

### 12.6 稽核日誌（Audit Log）

- 記錄所有管理操作（DataSource CRUD / 使用者管理 / 角色管理 / Display 管理）
- 每筆記錄：操作時間、操作者、操作類型、資源識別、變更前後值
- 提供篩選（時間範圍 / 操作者 / 操作類型）

### 12.7 系統設定（System Settings）

- 以 Key/Value 格式儲存全系統參數
- 例如：Token 有效期限、查詢逾時、預設刷新間隔
- 可在 Admin 介面線上修改，無需重啟服務（部分設定）

---

## 十三、多語系支援 Localization

### 13.1 架構設計

| 設計決策 | 說明 |
|---------|------|
| 語言字典儲存位置 | **資料庫**（localization_cultures + localization_entries 表） |
| 不使用 `.resx` | `.resx` 為編譯期資源，不適合線上維護 |
| 優點 | 可在 Admin 線上編輯，不需重建或重新部署應用程式 |
| 快取 | 語言包載入後在 Client 側快取，語言切換時重新載入 |

### 13.2 Language Culture 管理

| 設定欄位 | 說明 |
|---------|------|
| language_code | 如 `zh-TW`, `zh-CN`, `en-US` |
| display_name | 如「繁體中文」 |
| native_name | 如「繁體中文（台灣）」 |
| is_default | 是否為系統默認語言 |
| is_enabled | 是否對使用者顯示 |
| sort_order | 語言切換選單的排列順序 |

### 13.3 Dictionary Entry 管理

| 欄位 | 說明 |
|------|------|
| namespace / module | 如 `editor`, `runtime`, `admin`, `common` |
| key | 如 `save_button`, `connection_failed` |
| default_text | 原始（默認語言）文字 |
| translated_text | 目標語言翻譯文字 |
| description / context | 翻譯人員說明，提供上下文 |
| status | `missing`（未翻譯）/ `translated`（已翻譯） |

### 13.4 Admin 多語系管理介面

- **語言列表**：管理所有啟用的語言
- **字典 Grid**：分頁顯示所有字串條目
- **篩選**：依 namespace / culture / 翻譯狀態（missing/translated）/ 關鍵字搜尋
- **Inline Edit**：直接在 Grid 中點擊編輯翻譯文字，即時儲存
- **匯入 / 匯出**：支援 JSON / CSV 格式

### 13.5 Translation Memory（翻譯記憶）

- 重複使用相同來源文字的翻譯（Translation Memory）
- 重複語句偵測
- 批次建議工作流程
- 可選接入 AI / 機器翻譯提供者（Provider 可設定）
- **所有建議均需人工審核後才套用**，不自動發佈到 Runtime

### 13.6 Runtime 語言切換

- 使用者在前端切換語言後，Client 從 API 載入對應語言包
- 語言包以 JSON 格式傳輸（`{ key: translated_text }` 映射）
- 所有 UI 文字即時切換，不需重新整理頁面

【此處放截圖：Admin 多語系字典管理介面（Grid + inline 編輯）】

---

## 十四、認證與安全機制

### 14.1 JWT 認證

| 項目 | 說明 |
|------|------|
| 認證機制 | JWT（JSON Web Token）|
| Refresh Token | 長效 Refresh Token，實現 Silent Renewal（不強迫重新登入） |
| 登入端點 | `POST /api/auth/login` |
| 登出端點 | `POST /api/auth/logout`（伺服器端 Revoke RefreshToken） |
| Token 刷新 | `POST /api/auth/refresh` |

### 14.2 連線資訊加密

DataSource 的敏感連線資訊（帳號、密碼、API Key 等）：
- 使用 **ASP.NET Core DataProtection**（AES-256 加密）
- 加密後以 `secure_config` 欄位存入 PostgreSQL
- 不以明文傳輸至前端

### 14.3 DataProtection 持久化

- DataProtection Key 寫入容器 Volume，跨容器重啟保留
- 防止因 Key 遺失導致所有 DataSource 連線資訊無法解密

### 14.4 資源層級權限（Permission System 架構，待完整實作）

目前系統維持**開放模式**（所有已登入使用者均可存取）。  
Permission Phase（P1～P5）功能完善後實作，架構已定義：

```
資源類型：Folder / Display / DataSource
主體類型：User / Role
存取層級（以資源類型各自定義）：
  Folder：Read / Write / Manage
  Display：Read / Write / Manage
  DataSource：Read / Write
```

### 14.5 Soft Delete

- `users`、`folders`、`displays`、`data_sources`、`uploaded_files` 均支援 Soft Delete
- 刪除操作設定 `deleted_at` 時間戳，不實際移除資料列
- 保留完整歷史記錄，可追溯

### 14.6 Audit Log

- 所有 Admin 管理操作均寫入 `audit_logs`
- 記錄：操作者、操作時間、操作類型、資源識別、變更內容

---

## 十五、資料庫 Schema

### 15.1 資料庫技術

- 資料庫引擎：**PostgreSQL**
- ORM：EF Core + Npgsql
- 命名慣例：**snake_case**（所有資料表與欄位）
- Display 結構以 **jsonb** 格式儲存，兼顧 Schema 彈性與查詢效能

### 15.2 資料表清單

| 資料表 | 用途 | Soft Delete |
|--------|------|-------------|
| `users` | 使用者帳號 | ✅ |
| `roles` | 系統角色 | — |
| `user_roles` | 使用者角色對應（多對多） | — |
| `folders` | 資料夾（支援巢狀樹狀） | ✅ |
| `displays` | Display 定義（含 display_json jsonb） | ✅ |
| `data_sources` | DataSource 設定（含 secure_config 加密欄位） | ✅ |
| `data_source_views` | DataSource 下的 View 定義 | — |
| `permissions` | 資源層級授權（Folder / Display / DataSource） | — |
| `audit_logs` | 所有管理操作稽核記錄 | — |
| `uploaded_files` | 上傳圖片檔案記錄 | ✅ |
| `display_snapshots` | Display 版本歷史快照（最近 5 筆） | — |
| `user_favorites` | 使用者 Display 收藏 | — |
| `display_views` | Display 瀏覽紀錄（Recent 功能用） | — |
| `refresh_tokens` | JWT Refresh Token | — |
| `system_settings` | 系統參數 Key/Value | — |
| `localization_cultures` | 語言文化設定（語言清單） | — |
| `localization_entries` | 多語系字典條目 | — |

### 15.3 核心資料表欄位

**displays**
```
id             UUID         PK
title          TEXT
folder_id      UUID         FK → folders（nullable = 放在根目錄）
owner_id       UUID         FK → users
display_json   JSONB        整份 Display 結構（Symbols + DataBindings + Layouts）
created_at     TIMESTAMPTZ
updated_at     TIMESTAMPTZ
deleted_at     TIMESTAMPTZ  Soft Delete
```

**data_sources**
```
id                 UUID    PK
name               TEXT
type               TEXT    "SqlServer" / "MySQL" / "PostgreSQL" /
                           "InfluxDB_InfluxQL" / "InfluxDB_Flux" / "InfluxDB_SQL" /
                           "easypi" / "Mock"
connection_config  JSONB   非敏感連線設定（Host、Port、Database）
secure_config      TEXT    AES 加密的敏感設定（密碼、API Key）
is_enabled         BOOL
```

**permissions**
```
id             UUID
resource_type  TEXT    "Folder" / "Display" / "DataSource"
resource_id    UUID
principal_type TEXT    "User" / "Role"
principal_id   UUID
access_level   TEXT    依 resource_type 各自詞彙
```

**localization_entries**
```
id                UUID
culture_id        UUID    FK → localization_cultures
namespace         TEXT    如 "editor" / "runtime" / "admin"
key               TEXT    如 "save_button"
default_text      TEXT    原始文字
translated_text   TEXT    目標語言翻譯
description       TEXT    翻譯上下文說明
status            TEXT    "missing" / "translated"
```

---

## 十六、REST API 端點清單

### 認證（Auth）

| Method | 路徑 | 說明 |
|--------|------|------|
| POST | `/api/auth/login` | 登入，回傳 JWT + RefreshToken |
| POST | `/api/auth/logout` | 登出（Revoke RefreshToken） |
| POST | `/api/auth/refresh` | 刷新 JWT |
| GET | `/api/auth/me` | 取得當前使用者資訊 |

### Displays

| Method | 路徑 | 說明 |
|--------|------|------|
| GET | `/api/displays` | Display 列表（含 Permission 標記） |
| POST | `/api/displays` | 建立 Display |
| GET | `/api/displays/{id}` | 取得單筆 Display（含 DisplayJson） |
| PUT | `/api/displays/{id}` | 儲存 DisplayJson |
| DELETE | `/api/displays/{id}` | 刪除（Soft Delete） |
| PUT | `/api/displays/{id}/owner` | 轉移 Display 擁有者 |
| GET | `/api/displays/{id}/my-permission` | 查詢當前使用者對此 Display 的授權等級 |
| GET | `/api/displays/favorites` | 個人收藏清單 |
| POST | `/api/displays/{id}/favorite` | 加入收藏 |
| DELETE | `/api/displays/{id}/favorite` | 移除收藏 |
| GET | `/api/displays/recent` | 最近瀏覽清單 |

### Folders

| Method | 路徑 | 說明 |
|--------|------|------|
| GET | `/api/folders/tree` | 資料夾樹（含 Permission 標記） |
| POST | `/api/folders` | 建立資料夾 |
| PUT | `/api/folders/{id}` | 更新資料夾（改名 / 移動） |
| DELETE | `/api/folders/{id}` | 刪除資料夾（Soft Delete） |

### Studio（前端唯讀，Editor 使用）

| Method | 路徑 | 說明 |
|--------|------|------|
| GET | `/api/studio/datasources` | 取得已授權 DataSource 清單 |
| GET | `/api/studio/datasources/{id}/views` | 取得 DataSource View 清單 |
| GET | `/api/studio/datasources/{id}/views/{viewId}/fields` | 取得 View 欄位清單（含 DisplayName / Unit） |

### 查詢（Query）

| Method | 路徑 | 說明 |
|--------|------|------|
| POST | `/api/query/preview` | 預覽查詢（不套用 RuntimeFilter，Admin 用） |
| POST | `/api/query/execute` | 執行查詢（套用完整 RuntimeContext，Runtime 用） |

### 資料來源（DataSources，Admin）

| Method | 路徑 | 說明 |
|--------|------|------|
| GET | `/api/datasources` | DataSource 列表 |
| POST | `/api/datasources` | 新增 DataSource |
| PUT | `/api/datasources/{id}` | 更新 DataSource |
| DELETE | `/api/datasources/{id}` | 刪除 DataSource |
| POST | `/api/datasources/{id}/test-connection` | 測試連線 |
| GET | `/api/datasources/{id}/views` | View 列表 |
| POST | `/api/datasources/{id}/views` | 新增 View |
| PUT | `/api/datasources/{id}/views/{viewId}` | 更新 View |
| DELETE | `/api/datasources/{id}/views/{viewId}` | 刪除 View |
| GET | `/api/datasources/{id}/views/{viewId}/preview` | View 前 5 筆預覽 |
| GET | `/api/datasources/{id}/schema` | 取得資料庫 Schema（Tables / Columns） |
| GET | `/api/datasources/{id}/discover-fields` | 探索 View 欄位 |

### 權限（Permissions）

| Method | 路徑 | 說明 |
|--------|------|------|
| GET | `/api/permissions` | 查詢特定資源的授權清單 |
| POST | `/api/permissions` | 新增授權 |
| PUT | `/api/permissions/{id}` | 修改授權等級 |
| DELETE | `/api/permissions/{id}` | 刪除授權 |

### 多語系（Localization）

| Method | 路徑 | 說明 |
|--------|------|------|
| GET | `/api/localization/cultures` | 取得啟用語言清單 |
| GET | `/api/localization/bundle/{cultureCode}` | 取得指定語言的完整字典包 |
| GET | `/api/localization/entries` | Admin：字典條目列表（含篩選） |
| PUT | `/api/localization/entries/{id}` | Admin：更新翻譯文字 |
| POST | `/api/localization/import` | Admin：匯入 JSON / CSV |
| GET | `/api/localization/export` | Admin：匯出 JSON / CSV |

### 系統設定（Settings）

| Method | 路徑 | 說明 |
|--------|------|------|
| GET | `/api/settings` | 取得所有系統參數（含來源標記 db/config/default） |
| PUT | `/api/settings/{key}` | 更新系統參數值 |

### 圖片上傳（Uploads）

| Method | 路徑 | 說明 |
|--------|------|------|
| POST | `/api/uploads` | 上傳圖片 |
| GET | `/api/uploads` | 上傳檔案列表 |
| DELETE | `/api/uploads/{id}` | 刪除上傳檔案 |
| GET | `/uploads/{filename}` | 提供圖片（nginx 反向代理） |

---

## 十七、部署架構

### 17.1 Docker Compose 三容器

```yaml
services:
  api:           # VisoLink.Server（port 6000）
  client:        # VisoLink.Client Blazor WASM（port 6001）
  admin:         # VisoLink.Admin Razor Pages（port 6002）
  postgres:      # PostgreSQL（port 65433 對外）
  pgadmin:       # pgAdmin Web UI（port 6050）
```

**容器可靠性設定**
- 所有三個應用容器均設定 `restart: unless-stopped`
- Docker Engine 重啟後自動恢復服務

### 17.2 nginx 反向代理

nginx 處理以下流量：
- `/uploads` 目錄靜態圖片服務（反向代理至 `/app/uploads`）
- `client_max_body_size`：支援大型圖片上傳（預設 50MB）
- SVG 快取控制：`Cache-Control: no-cache`（確保更新後立即生效）
- Graphic Library manifest：`Cache-Control: no-store`

### 17.3 資料持久化

| 資料 | 儲存位置 |
|------|---------|
| Display 結構 | PostgreSQL `displays.display_json`（jsonb） |
| DataSource 設定 | PostgreSQL `data_sources` |
| 上傳圖片 | Docker Volume（`/app/uploads`） |
| DataProtection Key | Docker Volume（`/app/dp-keys`） |
| Graphic Library SVG | Docker Volume（`/app/wwwroot/graphics`） |
| 語言字典 | PostgreSQL `localization_entries` |

### 17.4 一鍵重建（開發環境）

```batch
docker_rebuild.bat
```
- 停止並移除舊容器
- 重新 Build Docker Image
- 啟動新容器
- `MigrateAsync()` 自動套用所有 EF Core Migration
- `SeedAsync()` 注入種子資料（`seed_dev.sql`）

---

## 十八、技術選型完整清單

| 層 | 技術 | 版本 / 說明 |
|----|------|------------|
| **前端框架** | Blazor WebAssembly | .NET 8 |
| **畫布渲染** | SVG（原生 Blazor 元件） | 不依賴第三方 Canvas 函式庫 |
| **圖表引擎** | Apache ECharts（via JS Interop） | 取代 amCharts（2026-05-10 遷移） |
| **UI 元件庫** | Radzen（主應用） | Blazor 元件套件 |
| **狀態管理** | 自訂 EditorStateService | DI 單例，不使用 Redux/Flux |
| **後端框架** | ASP.NET Core Web API | .NET 8，RESTful |
| **Admin 框架** | ASP.NET Core Razor Pages | .NET 8 + Metronic HTML/CSS |
| **ORM** | EF Core + Npgsql | snake_case 命名慣例 |
| **資料庫** | PostgreSQL | jsonb 儲存 DisplayJson |
| **快取層** | Redis | 雙實例，已預備，Phase 4 啟用 |
| **認證** | JWT + Refresh Token | ASP.NET Core JWT Bearer |
| **加密** | ASP.NET Core DataProtection | AES-256，連線資訊保護 |
| **即時資料** | HTTP Polling（RuntimeQueryScheduler） | 輪詢設計，非 WebSocket |
| **容器化** | Docker / Docker Compose | 三服務容器 |
| **Web Server** | nginx | 反向代理 + 靜態資源 + 快取控制 |
| **圖形符號** | ISA-101 SVG 自製圖庫 | 226+ 工業符號，manifest v3.2 |
| **多語系** | DB-backed localization（自製） | 不依賴 .resx，線上可維護 |

---

*本文件為 VisoLink 功能全覽規格書，所有功能均已完成並通過人工驗收（截至 2026-06-21）。*  
*截圖請依 `【此處放截圖：XXX】` 標注位置補充。*
