# VisoLink 對外產品事實

- 文件角色：業務版與技術版產品介紹的共同事實來源
- 基準日期：2026-08-19
- 主要驗證來源：`OperationManual/`、`Training/`

## 1. 產品定位

VisoLink 是可自行部署的工業資料視覺化平台，將既有資料來源連接、資料整理與綁定、衍生計算、自由畫布設計、Runtime 監看分析及企業治理串成同一個工作流程。

### 品牌命名意義

VisoLink 的 **VISO** 代表四個產品核心：

| 字母 | 產品核心 | 中文意義 | 對應價值 |
|---|---|---|---|
| V | Visualize | 視覺化 | 將設備、環境與營運資料轉化為直觀、易懂的資訊。 |
| I | Integrate | 整合 | 串聯不同系統、設備與資料來源，減少資訊孤島。 |
| S | Sense | 感知 | 即時掌握現場狀態與變化，協助人員判斷。 |
| O | Operate | 操作 | 將洞察轉化為監控、操作與改善行動。 |

**Link 不是第五個獨立能力，而是串聯 VISO 四個核心的關鍵：**

- Visualize × Link × Integrate：讓不同來源的工業資料，連結到視覺化呈現。
- Visualize × Link × Sense：讓設備狀態、即時數據與趨勢，連結到人的感知與判斷。
- Visualize × Link × Operate：讓視覺化不只是「看見」，更能連結到實際的監控與操作。

官方命名解釋為：「以視覺化為入口，連結整合、感知與操作。」品牌主張為：「VisoLink — 讓視覺化，連結資料整合、現場感知與實際操作。」

對外介紹時必須保留的核心論述：

- VisoLink 解決的是工業資料視覺化的「最後一哩」，不是取代客戶既有的 PLC、DCS、Historian、MES 或資料庫投資。
- 根本問題是現場知識與畫面控制權分離，使日常改善反覆變成專案。
- 產品價值同時來自兩端：讓具權限的現場設計者能自主交付，也讓企業保留資料、權限、版本、稽核、備份及維運治理。
- 每次交付應累積成可重用的 DataSource、View、DataBinding、Calculation、Display、Symbol 與操作知識，而不是只產出一張畫面。
- 詳細的業務與技術論述順序見 `CONTENT_STRATEGY.md`。

主要工作區：

- Display Library：管理 Folder、Display、縮圖與圖面權限。
- Studio：設計 Display、加入 Symbol、綁定資料、建立 Variable 與 Calculation。
- Runtime：即時與歷史監看、全域時間情境、Quick Trend、Time Marker 與時間範圍彙整。
- Administration：管理資料、人員、權限、語系、授權、稽核、備份、API Token、系統狀態與 Cache。

## 2. 對外可描述的核心能力

### 資料與整合

- 建立及測試 DataSource 連線。
- 建立 View、欄位映射與結果預覽。
- 以 DataBinding 將來源整理成可供 Studio 使用的資料資產。
- Data Browser 支援依分類瀏覽、搜尋及拖曳套用資料。
- Variable 與 Calculation 支援資料轉換、條件邏輯及跨來源衍生指標。

### 視覺設計

- 自由畫布、畫布設定、物件編輯、排列、圖層、復原與重做。
- Symbol 類型涵蓋圖形、文字、圖片、iFrame、數值、趨勢、表格、狀態、Gauge、Bar、Pie、Sankey 與 Progress 等用途。
- Graphic Library 提供可搜尋及重用的工業圖形。
- Display 可儲存、預覽、複製、分類與管理權限。

### Runtime 監看與分析

- 支援即時與歷史時間情境、全域時間 Filter 及互動式時間窗。
- Quick Trend 可選擇多個資料點進行趨勢比較。
- Time Marker 可建立、保留、拖曳、排序及比較時間點。
- 時間範圍彙整支援加總、平均、最大、最小與筆數等分析。
- Runtime 顯示載入中、無資料、無權限與錯誤等狀態，避免誤認為正常值。

### 治理與維運

- 圖面權限與資料權限分開管理。
- 後台涵蓋 Users、Groups、Roles、DataSource、DataBindings、Data Permissions、Folders、Media Library、Localization、License、Audit Logs、Backup & Restore、API Token、System Settings 與 Cache Management。
- 敏感連線資訊、身分驗證、稽核與備份屬於企業治理能力的一部分。
- Cache 可管理節點、連線、狀態、Key、TTL Policy 與清除範圍，支援查詢共用及負荷分流情境。

### 部署

- 使用者前台、應用服務、管理後台與持久化資料分工部署。
- 支援以 Docker Compose 在企業環境自行部署及維運。
- PostgreSQL 保存畫面資產、設定、權限及稽核等持久資料。

## 3. 文件量體基準

依 2026-08-18 的操作手冊規劃與驗收記錄：

- 前台分為 Display Library、Studio、Runtime 三章，共 43 項固定功能入口。
- 後台包含 Dashboard 加 15 個正式導覽項目，共 16 個章節。
- 教育訓練分為一般監看人員、Studio 設計人員與系統管理員三條學習路徑。

上述數字用於說明文件完整度，不應直接轉換成「產品只有這些功能」的永久承諾。

## 4. 狀態與措辭規則

對外描述功能時使用以下狀態：

| 狀態 | 定義 | 對外用語 |
|---|---|---|
| Released | 正式介面存在，操作手冊已有正式內容 | 支援、提供、可使用 |
| Environment Validation | 功能存在，但客戶環境的資料生命週期或權限結果仍需依政策驗證 | 支援，導入時需確認政策 |
| Preview | 已可展示，但尚未完成正式驗收 | 預覽、試用 |
| Roadmap | 尚未作為正式功能交付 | 規劃中，不寫成現有能力 |

目前需在客戶正式環境再次驗證的事項：

- Folder 刪除時內含 Display 的處理規則。
- Display 刪除後的結果與復原政策。
- Folder 與 Display 授權的繼承、覆寫及優先順序。
- 不同角色、群組及帳號組合下的實際授權結果。

## 5. 禁止直接使用的聲明

- 「所有功能均已完成」：改為逐項狀態與基準日期。
- 「無限制擴充」：改為可依架構與容量規劃擴充。
- 「完全不需要 IT」：Studio 降低日常畫面變更依賴，治理與資料仍由適當角色負責。
- 未經版本驗證的精確數量、效能數字、節省比例或競品結論。

## 6. 售後文件入口

- 操作手冊：`../../OperationManual/index.html`
- 教育訓練：`../../Training/index.html`

產品介紹只概述能力；逐步操作、角色練習、注意事項與驗收標準應導向上述售後文件。
