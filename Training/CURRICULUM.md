# VisoLink 教育訓練完整課綱

- 對應系統版本：VisoLink 1.4.0-beta（Course 00 另含 DataGateway・Agent 0.4.0-beta、備份中心 0.1.0 的概觀）
- 事實來源：`../OperationManual/`（前台、後台、DataGateway、Agent 手冊）與 `../ProductIntroduction/source/PRODUCT_FACTS.md`；手冊沒有寫的功能，教材不寫。
- 截圖：優先引用操作手冊已拍好的畫面（`../OperationManual/img/...`）；手冊沒有對應畫面的少數投影片保留早期版本截圖，並在圖說註明。

## 一、課程架構原則

本訓練採「角色學習路徑 × 主題課程模組」設計：

- 三類受訓對象決定必修範圍、學習深度及實作標準。
- Course 00–06 是可獨立授課、重複選修及持續擴充的教材。
- 同一功能依角色採不同深度：使用者會操作、設計者會建構、管理員會配置與排查。
- 每門課均包含概念說明、介面導覽、操作示範、情境練習及課後驗收。
- DataGateway／Agent 與備份中心的詳細操作另有專屬課程（另行提供）；本系列只在 Course 00 概述，並在 Course 05、06 說明 VisoLink 與它們的接點。

## 二、三類受訓對象與完成標準

### A. 全體人員與一般監看人員

學習目標：理解產品家族與平台、正確選擇 Display、判讀即時與歷史資料，並使用 Runtime 分析與回寫功能完成工作與回報。

必修課程：

1. Course 00｜VisoLink 產品家族概觀
2. Course 01｜Runtime Operation

應具備能力：

- 說出 VisoLink、DataGateway、Agent、備份中心各自的定位與資料流向。
- 分辨 Display Library、Studio、Runtime、Administration。
- 登入（含保存登入的使用時機），找到工作所需 Display；在手機與平板使用 RWD 版面。
- 分辨 Realtime 即時與 History 歷史；判斷資料載入、無資料、無權限及異常狀態。
- 使用全域時間 Filter、班別一鍵切換、互動式時間窗與全螢幕模式。
- 使用 Quick Trend 選擇並比較多個 Tag；建立、整理及比較 Time Marker。
- 獲授權時以回寫表單送出設定值，並以設備讀回結果確認。
- 看懂「系統維護中」畫面；使用網址參數嵌入畫面。
- 回報時保留人員、畫面、設備、時間與現象。

完成標準：可獨立完成一次指定監看任務、一次時間比較及一份可追溯的異常回報。

### B. Studio 畫面設計人員

學習目標：把操作需求轉成結構清楚、資料正確、可分析、可在多種裝置使用且可維護的 Display。

必修課程：

1. Course 00｜VisoLink 產品家族概觀
2. Course 01｜Runtime Operation
3. Course 02｜Studio Basics
4. Course 03｜DataBinding and DataBrowser
5. Course 04｜Calculation and Variables

應具備能力：

- 從空白或 Display 樣本建立 Display，設定畫布，套用底板。
- 操作選取、移動、縮放、對齊、複製、群組、鎖定及圖層順序。
- 依資訊目的選擇 Symbol（18 種，含和弦圖）與數值、表格樣式。
- 使用新圖庫與智慧圖形；以 Symbol 樣本重用一組物件。
- 製作並預覽 RWD 版面。
- 從分類式 Data Browser 找到正確 DataBinding 與欄位，分辨即時與歷史，套用到相容 Symbol。
- 一次替換整張 Display 的 DataBinding；匯出、匯入 Display。
- 設定回寫表單。
- 建立 Variable、Calculation、條件狀態與衍生 KPI。
- 在 Runtime 驗證時間範圍、不同權限、不同資料值與不同裝置。

完成標準：由需求開始，獨立交付一張經監看人員操作驗收的 Display（含 RWD 版面），且能說明每項資料與計算來源。

### C. 系統管理員

學習目標：以最小權限、可追溯變更及可回復原則，維持資料、人員與平台穩定運作。

必修課程：

1. Course 00｜VisoLink 產品家族概觀
2. Course 01｜Runtime Operation（理解使用者情境）
3. Course 05｜DataSource Management
4. Course 06｜Admin and Governance

應具備能力：

- 建立及驗證 DataSource（含關聯式資料庫引導式設定與 Oracle），判斷連線、權限、結構或資料更新問題。
- 建立 View、欄位映射與 DataBinding。
- 分清 DataGateway 的歷史（VisoLink DataGateway 資料來源）與即時（配對碼連線），設定即時 DataBinding 的使用與寫入權限。
- 管理使用者生命週期與職責群組；以有效權限預覽確認實際結果。
- 管理圖庫與智慧圖形、多語系術語、Client 設定（班別條件、清單背景）。
- 理解 Cache 的資料緩衝、共用與多設備負荷分流角色。
- 理解授權以裝置點數計算，能查看點數使用與釋放點數。
- 使用運作中／維護中；執行備份回復演練，說明何時改用備份中心。
- 判讀 Dashboard、稽核及變更紀錄。

完成標準：可完成低風險日常管理；高影響變更前能提出影響評估、備份、回復及驗證方案。

## 三、Course 00｜VisoLink 產品家族概觀

建議時間：40 分鐘（另有 15 分鐘時序資料先備章節）。適用：所有人員。先備：無。對應：VisoLink 1.4.0-beta／DataGateway・Agent 0.4.0-beta／備份中心 0.1.0。

### 單元細節

1. 產品家族：VisoLink（工業資料視覺化平台）、DataGateway（設備資料中樞）、DataGateway Agent（現場資料取得）、VisoLink 備份中心（中央備份與還原）各自的定位；各自獨立運作。
2. 如何搭配：設備 → Agent → DataGateway → VisoLink；回寫方向相反。VisoLink 以「VisoLink DataGateway」資料來源讀歷史、以「DataGateway 即時」（配對碼）讀即時值與回寫；既有資料庫由 VisoLink 直接連接。
3. DataGateway 與 Agent 的管理畫面與使用者；詳細課程另行提供（預留連結：DataGateway、Agent 操作手冊）。
4. 備份：各產品自己能手動備份；備份中心提供中央管理、排程、原機與換機還原；還原期間受管主機進入維護中。詳細課程另行提供。
5. 時序資料先備章節：生產結果與生產過程。
6. VisoLink 的時間條件：Realtime 即時與 History 歷史、全域時間 Filter。
7. 四個工作區：Display Library、Studio、Runtime、Administration。
8. 三類角色：監看人員、Studio 設計人員、系統管理員的責任與交接。
9. 完整流程：連接 → 整理 → 計算 → 設計 → 監看與操作 → 治理。
10. 核心物件：DataSource、View、DataBinding、Tag／Field、Display、Symbol、Variable、Calculation、樣本與底板、回寫表單。
11. 資料與時間：數值必須連同時間、設備、單位與比較基準判讀。
12. 雙層權限：圖面權限控制入口，資料權限控制內容；即時資料另有寫入權限。

驗收：學員能說明四個產品的定位與資料流向，並以自己的角色說明工作位於流程哪一段，以及需要與誰交接。

## 四、Course 01｜Runtime Operation

建議時間：75 分鐘。適用：監看人員必修；設計與管理人員理解使用情境。

### 單元細節

1. 登入與保存登入：個人帳號、保存登入（共用電腦不勾）、多台裝置同時登入，每台占 1 點授權。
2. Display 導覽：圖面庫檢視範圍、資料夾、搜尋、我的最愛、最近使用、RWD 標記；載入失敗與重新載入。
3. Runtime 畫面：上方導覽、即時狀態列、中央圖面、浮動工具列、時間列。
4. 即時與歷史標示：Realtime 即時只顯示現在、History 歷史依時間範圍；顯示或隱藏資料標籤。
5. 畫面狀態：載入中、無資料、無權限與錯誤。
6. 顯示模式與工具列記憶：固定畫布、符合螢幕／物件、全螢幕模式、移動畫布、縮放；設定記在瀏覽器。
7. 行動裝置 RWD：手機與平板自動改用 RWD 版面；桌機用 Canvas／RWD 切換檢查。
8. 全域時間 Filter：最近時間、日曆區間、自訂（時間表示式）、擴充條件。
9. 班別一鍵切換：擴充條件頁籤的早班、中班、夜班等。
10. 互動式時間窗：拖曳區間、現在／暫停、重新整理、更新頻率。
11. Data Analysis、Quick Trend、Time Marker 與比較設定（時間對齊、最大時間差、比較模式、基準）。
12. 設備回寫：填寫 → 確認清單 → 結果；以設備讀回為準；權限與「回寫目標未設定」。
13. 網址參數：mode、toparea、toolbar、timewindow、zoomsize、starttime／endtime；優先順序；複製範例網址。
14. 維護中畫面：30 秒內出現、期間暫停查詢與回寫、結束後自動回到原畫面。
15. 回報格式：畫面（Canvas／RWD、裝置）、設備、Tag、時間、現象、操作（含回寫請求編號）與影響範圍。

實作：指出即時與歷史元件；用擴充條件切到指定班別，加入兩個 Tag、建立兩個 Time Marker 完成比較；以 RWD 與網址參數檢視同一張 Display；（獲授權者）送出一次測試回寫並讀出結果；提交回報。

## 五、Course 02｜Studio Basics

建議時間：120 分鐘。適用：Studio 設計人員。

### 單元細節

1. Studio 工作區：標題列、工具列、左側面板（Symbols、圖庫、圖層、Symbol 樣本、資料、計算、變數、回寫）、畫布、屬性面板、時間列。
2. 建立前規劃：使用者、任務、裝置（Canvas 或 RWD）、可重用的樣本與底板。
3. 建立 Display：從空白或 Display 樣本建立；樣本帶入物件、版面與底板，資料綁定需自己設定。
4. Display 樣本：加入、分類、編輯、權限；樣本與已建立 Display 互相獨立。
5. 畫布設定：尺寸預設、背景、格線與貼齊。
6. 基礎操作：選取、多選、移動、縮放、旋轉、快捷鍵、跨分頁複製貼上、復原與重做。
7. 排列、群組與圖層。
8. Symbol 類型：18 種（圖形、文字與媒體、資料類，含和弦圖）；選擇原則。
9. 屬性設定：基本、外觀、資料、規則分頁；漸層與純色限制。
10. 數值版面（6 種）與表格樣式（7 種）。
11. 新圖庫：伺服器統一提供、分類與搜尋、拖入自動貼合管口；舊版圖庫已移除。
12. 智慧圖形：控制點改變形狀、端點自動接上管口、單色或漸層換色；靜態、可拉伸與智慧三種圖形。
13. Symbol 樣本：存成樣本、放入時選繼承或複製、補上資料綁定。
14. Display 底板：製作、加入、更換、批次加入；修改底板所有頁面一起更新。
15. RWD 版面編輯：裝置寬度、12 格 row、版面元件、各裝置設定、自動排列、RWD 版面樣本。
16. RWD 預覽：逐一切換裝置，檢查截斷；Runtime 實機確認。
17. 儲存與預覽：未儲存圓點、另外儲存；預覽是歷史快照，即時值請到 Runtime 確認。

實作：從指定 Display 樣本建立畫面並套用底板；放置標題、狀態、三項 KPI、儀表與趨勢；用新圖庫與智慧圖形完成管線；存成 Symbol 樣本並以繼承放入兩處；建立 RWD 版面並在預覽與 Runtime 驗證。

## 六、Course 03｜DataBinding and DataBrowser

建議時間：120 分鐘。適用：Studio 設計人員。先備：Course 02。

### 單元細節

1. 資料層級：DataSource → View → DataBinding → Field → Symbol 屬性。
2. Data Browser 三種模式：分類、標籤、已使用；只列出帳號有權限的資料。
3. 分類瀏覽：節點階層、Realtime／History 標示、狀態燈號、欄位資訊。
4. 即時與歷史：適合的元件、回寫表單只能用即時 DataBinding、Editor 預覽不顯示即時值。
5. 搜尋與 Field 資訊：路徑、型別、單位、引用次數。
6. 資料型別：文字、數值、布林、日期時間。
7. 拖曳套用：把 Binding／欄位套用到既有相容 Symbol（不會在空白畫布自動建立元件）；不接受的元件；Calculation 可拖曳的元件。
8. 屬性綁定：資料分頁模式（DataBinding 或計算）、欄位、聚合；趨勢系列、表格欄位、狀態與和弦圖。
9. 已使用資料：盤點引用。
10. 格式化與安全狀態：單位、小數位數、空值文字、時間戳記。
11. 替換 DataBinding：一次更換整張 Display 的資料，連同樣式規則、圖表、變數、計算與回寫欄位；只看未設定。
12. 匯出與匯入：.vldisplay 包含與不包含的內容、資料依 ID 與名稱自動對應、匯入一律建立新 Display、未設定資料用替換補上。
13. 回寫表單設定：所屬 DG、欄位、輸入模式與範圍、12 格排版、儲存至 Display；寫入權限由管理者授予。
14. 除錯：Symbol、路徑、型別與資料類型、時間、權限、來源逐項確認。

實作：找到指定 DataBinding 並說明即時或歷史；先建立元件再拖曳套用；手動綁定狀態 Symbol；用替換 DataBinding 改成另一條產線的資料；匯出兩張 Display 並匯入補齊資料；建立一張回寫表單；排除一個錯誤綁定。

## 七、Course 04｜Calculation and Variables

建議時間：120 分鐘。適用：進階 Studio 設計人員。先備：Course 03。

### 單元細節

1. Variable 定位：重複使用的取值結果（Var. 開頭），函式 Last、First、Min、Max、Avg、Sum，運算範圍由時間視窗決定。
2. 命名原則：用途、範圍、單位及資料責任可辨識。
3. 基礎運算：四則、比例、差值、百分比與單位轉換。
4. 條件邏輯：門檻、區間、布林判斷與狀態文字。
5. 跨來源計算：確認時間基準、更新頻率與缺值處理。
6. 衍生 KPI：將原始資料轉成效率、達成率、負載或品質指標。
7. 時間彙整：加總、平均、最大、最小及筆數的適用情境。
8. 套用 Symbol：數值、圖形、儀表、狀態與進度。
9. 邊界情境：除以零、空值、負值、極端值及過期資料。
10. 驗證方法：準備已知輸入與預期結果，逐項測試公式。
11. 可維護性：避免重複公式，保留商業定義與變更原因。
12. Runtime 驗證：切換時間、權限及資料狀態確認結果一致。

實作：以兩個來源建立衍生 KPI，配置三段狀態門檻並套用至數值、儀表與警示外觀。

## 八、Course 05｜DataSource Management

建議時間：150 分鐘。適用：資料與系統管理員。

### 單元細節

1. 管理責任、生命週期與建立前盤點。
2. 連接類型：模擬資料；easyPI WebAPI、IIoTFab PIES、VisoLink DataGateway；MySQL、Oracle Database、PostgreSQL、SQL Server；InfluxDB Flux、InfluxQL。建立後不能變更類型。
3. 歷史與即時兩條路：DataGateway 歷史在資料來源設定，即時與回寫在 DataGateway 即時設定。
4. 安全連線：專用唯讀帳號、密碼不回填、憑證管理。
5. 關聯式資料庫引導式設定：選擇類型 → 連線設定（測試後儲存）→ 第一個 View → 完成；查詢模式標準選取、長表轉寬表（Tag Pivot）、進階 SQL；維護工作區與唯讀 SQL Console；資料結構設計指南。
6. Oracle Database：19c、21c、23ai、26ai；連線方式、驗證方式、傳輸加密、資料庫時區；內建驅動。
7. 連線測試：辨識失敗發生在哪一層。
8. VisoLink DataGateway 歷史：WebAPI URL、帳密、Timeout、Timezone、TLS；建立並設定 Views。
9. View：角色、清單、四段建立流程、來源與查詢（含 DataGateway Tag 載入）、欄位映射、預覽與驗證。
10. DataBinding：基本資料、來源與欄位、結果預覽、使用權限；Runtime Cache 多用 1 點授權。
11. DataGateway 即時：即時來源（配對碼、測試連線、開放回寫）、即時 View（Tag 身分、欄位代碼、DG 可寫）、即時 DataBinding 雙權限、權限預覽、即時推送負載設定。
12. 回寫的四道關卡：Agent、DataGateway、即時來源、即時 DataBinding 寫入權限。
13. 端到端驗證、異常分類、結構變更與停用。

實作：以引導式設定建立關聯式資料庫 DataSource 與第一個 View；建立 VisoLink DataGateway 歷史資料來源與 View；建立 DataBinding；以配對碼建立 DataGateway 即時來源、即時 View 與即時 DataBinding，授予測試使用者寫入權限並以權限預覽確認；Studio／Runtime 端到端驗證。

## 九、Course 06｜Admin and Governance

建議時間：180 分鐘。適用：系統管理員。先備：Course 05。

### 單元細節

1. 管理原則與治理循環。
2. 後台導覽與 Dashboard：身分管理、資料、系統三組 17 個管理項目；需要處理、服務架構圖、最近活動。
3. 身分模型、使用者生命週期、群組與角色設計。
4. 權限模型：圖面權限（Display／Folder 的 Viewer、Editor、Manager、Administrator）、DataBinding 使用權限、即時寫入權限；資料權限頁 ResourceType、PrincipalType、AccessLevel。
5. 雙層驗證與權限層級；Folder 權限向下套用；全域公開。
6. 有效權限預覽：Display、Folder、DataBinding、系統功能四個分頁；唯讀；搭配實際帳號抽查。
7. 多語系：System、Public Dictionary、Display Dictionary。
8. 圖庫管理：圖庫與分類、上傳 SVG（安全檢查）、圖形資訊與接合點、製作智慧圖形。
9. Client 設定：擴充條件（班別，最多 12 條、時間表示式）與 Display 清單背景圖。
10. Cache：角色、多節點分流、健康判讀、TTL 與安全清理。
11. 授權以裝置點數計：1 點＝1 台登入中的裝置、Admin 與 DataGateway 登入不占點、心跳與自動釋放、強制登出、Runtime Cache 占點；授權到期、新增 License Key、離線啟用、使用歷史。
12. 稽核紀錄。
13. 運作中／維護中：暫停與仍可使用的項目、Client 畫面、切換紀錄；Backup API Token 可自動切換。
14. 備份與還原：建立、保存、檢查、演練、驗證；加密密碼。
15. 與備份中心的關係：自己的備份頁、單一系統排程、多套系統交給備份中心；備份 API Token；還原期間停止讀寫。
16. 變更與異常閉環、日常巡檢。

實作：建立測試身分與權限並以有效權限預覽驗證；上傳 SVG、新增班別條件；判讀 Dashboard、Cache 與授權點數情境；切換維護中再切回；建立備份並說明備份中心的接法；從稽核紀錄重建異常並完成閉環報告。

## 十、教材製作標準

每門 HTML 課程應包含：

1. 封面：課程編號、對象、時間、先備能力與對應系統版本。
2. 學習目標：完成後可執行的任務，不只列功能名稱。
3. 概念頁：說明功能目的、使用時機與角色責任。
4. 介面頁：優先引用操作手冊的實際截圖並說明操作區域；手冊沒有對應畫面時保留早期版本截圖並在圖說註明，或改用文字頁。
5. 操作頁：依步驟說明前提、動作、預期結果與常見錯誤。
6. 情境頁：以監看、設計或管理工作的真實問題帶入。
7. 注意事項：權限、安全、資料狀態及高影響操作邊界。
8. 實作頁：提供目標、測試資料、操作任務及產出物。
9. 驗收頁：以可觀察結果判斷是否通過。
10. 講師備註：建議示範重點、常見問答及可延伸內容。
11. 版本標示：每頁 `<head>` 寫 `<meta name="doc-systems">`（對應系統版本）並載入 `../assets/doc-version.js`，頁尾自動顯示文件版本與對應系統版本。
12. 公開網站：截圖與文字不得出現帳密、配對碼、Token、備份密碼、內部主機位址或客戶資料。
