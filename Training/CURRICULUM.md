# VisoLink 教育訓練完整課綱

- 對應系統版本：Course 00–06 對應 VisoLink 1.4.0-beta（Course 00 另含 DataGateway・Agent 0.4.0-beta、備份中心 0.1.0 的概觀）；Course 07 對應 DataGateway／Agent 0.4.0-beta；Course 08 對應備份中心 0.1.0
- 事實來源：`../OperationManual/`（前台、後台、DataGateway、Agent、備份中心手冊）與 `../ProductIntroduction/source/PRODUCT_FACTS.md`；手冊沒有寫的功能，教材不寫。
- 截圖：優先引用操作手冊已拍好的畫面（`../OperationManual/img/...`）；手冊沒有對應畫面的少數投影片保留早期版本截圖，並在圖說註明。

## 一、課程架構原則

本訓練採「角色學習路徑 × 主題課程模組」設計：

- 四類受訓對象決定必修範圍、學習深度及實作標準。
- Course 00–08 是可獨立授課、重複選修及持續擴充的教材。
- 同一功能依角色採不同深度：使用者會操作、設計者會建構、管理員會配置與排查。
- 每門課均包含概念說明、介面導覽、操作示範、情境練習及課後驗收。
- 各產品分開授課：Course 00 概述產品家族；Course 01–06 是 VisoLink；Course 07 是 DataGateway 與 Agent；Course 08 是備份中心。Course 05、06 說明 VisoLink 端與它們的接點，Course 07、08 說明各產品自己的操作。

## 二、四類受訓對象與完成標準

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
5. Course 08｜備份中心（BackupCenter）

應具備能力：

- 建立及驗證 DataSource（含關聯式資料庫引導式設定與 Oracle），判斷連線、權限、結構或資料更新問題。
- 建立 View、欄位映射與 DataBinding。
- 分清 DataGateway 的歷史（VisoLink DataGateway 資料來源）與即時（配對碼連線），設定即時 DataBinding 的使用與寫入權限。
- 管理使用者生命週期與職責群組；以有效權限預覽確認實際結果。
- 管理圖庫與智慧圖形、多語系術語、Client 設定（班別條件、清單背景）。
- 理解 Cache 的資料緩衝、共用與多設備負荷分流角色。
- 理解授權以裝置點數計算，能查看點數使用與釋放點數。
- 使用運作中／維護中；執行備份回復演練，說明何時改用備份中心。
- 在備份中心登記受管主機、設定存放位置與備份密碼、建立手動備份與排程，並在還原前完成停工、版本與密碼的事前檢查。
- 判讀 Dashboard、稽核及變更紀錄。

完成標準：可完成低風險日常管理；高影響變更前能提出影響評估、備份、回復及驗證方案；每台受管主機都有可用的備份與排程。

### D. 資料整合與 OT 管理員

學習目標：把現場設備資料安全地接進 DataGateway，只保存需要的 Tag，交給 VisoLink 使用，並能在受控條件下回寫設備。

必修課程：

1. Course 00｜VisoLink 產品家族概觀
2. Course 07｜DataGateway 與 Agent
3. Course 05｜DataSource Management（DataGateway 歷史、DataGateway 即時與回寫的 VisoLink 端單元）

應具備能力：

- 說明 Agent、DataGateway、VisoLink 的分工：Agent 只做取得、推送、接收、回寫；Tag、保存政策與查詢在 DataGateway。
- 把 Agent 連到 DataGateway（連線 URL、Enrollment token、DG 公開憑證），由 DataGateway 核准並確認 Online。
- 建立 Modbus TCP（Scan Group、Read Block、從讀取結果建立 Tag）與 OPC UA（資料群組、節點樹、批次命名）連線與 Tag；理解連線占用的授權點數。
- 在 DataGateway 管理 Tag 與來源；以保存額度、保存規則、保存分類與資料點指派決定哪些 Tag 保存。
- 以 Current Values、History 確認資料；以 WebAPI 交給 VisoLink 讀歷史、以配對碼交給 VisoLink 即時與回寫。
- 開啟連線回寫、建立寫入安全規則、指定可寫 Tag，追蹤 DataGateway 需求紀錄與 Agent Write Logs。
- 理解 DataGateway 維護中時 Agent 暫存、恢復後補傳，以及暫存上限；以 Data Flow Logs 與資訊診斷排查。

完成標準：在測試環境把一台設備接到 VisoLink 畫面並完成一次範圍內的回寫，只保存指定的 Tag，機密連線資訊未外流。

## 三、Course 00｜VisoLink 產品家族概觀

建議時間：40 分鐘（另有 15 分鐘時序資料先備章節）。適用：所有人員。先備：無。對應：VisoLink 1.4.0-beta／DataGateway・Agent 0.4.0-beta／備份中心 0.1.0。

### 單元細節

1. 產品家族：VisoLink（工業資料視覺化平台）、DataGateway（設備資料中樞）、DataGateway Agent（現場資料取得）、VisoLink 備份中心（中央備份與還原）各自的定位；各自獨立運作。
2. 如何搭配：設備 → Agent → DataGateway → VisoLink；回寫方向相反。VisoLink 以「VisoLink DataGateway」資料來源讀歷史、以「DataGateway 即時」（配對碼）讀即時值與回寫；既有資料庫由 VisoLink 直接連接。
3. DataGateway 與 Agent 的管理畫面與使用者；詳細課程見 Course 07。
4. 備份：各產品自己能手動備份；備份中心提供中央管理、排程、原機與換機還原；還原期間受管主機進入維護中。詳細課程見 Course 08。
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

## 十、Course 07｜DataGateway 與 Agent

建議時間：180 分鐘。適用：資料整合與 OT 管理員。先備：Course 00；VisoLink 端操作搭配 Course 05。對應：DataGateway／Agent 0.4.0-beta。

### 產品決定（授課時照講）

- Agent 只做取得、推送、接收、回寫；Agent 不保存歷史，保存政策與歷史查詢都在 DataGateway。
- 沒有指定保存政策的 Tag 不保存，只有即時值；保存額度不足時新進 Tag 也只更新即時值。
- DataGateway 維護中時，Agent 把資料暫存在本機，DataGateway 切回運作中後自動補傳；Agent 自己切到維護中時，維護期間不收集資料。
- Tag 屬於 DataGateway：Agent 新增的點自動建立 Tag（「Agent.連線.點」）；改名、更換來源、Agent 解除註冊，歷史都留在同一個 Tag。

### 單元細節

1. 分工：設備 → Agent → DataGateway → VisoLink；回寫方向相反、以 Tag 為目標。
2. 兩個管理畫面與登入：DataGateway（VisoLink 管理員或 DG 本機帳號）、Agent 本機帳號；救援登入只能建立或重設本機帳密。
3. 第一次使用順序：取得連線資訊 → Agent 連上 DataGateway → 核准 → 設備連線與 Tag → 保存 → 交給 VisoLink。
4. DataGateway 連線資訊：Agent 連線（URL、Enrollment token、DG 公開憑證）、加值開發 WebAPI、VisoLink 配對碼；三者都等同密碼。
5. Agent「DG 連線設定」：位址與憑證名稱相同、不可用 localhost；註冊狀態與 Uplink。
6. Agent Registry：核准、拒絕並刪除、解除離線 Agent 的註冊、重新申請註冊；Heartbeat 與 Offline 判定。
7. 設備連線與授權點數：每條連線 1 點、開回寫 2 點；停用仍占點，刪除才釋放；刪除連線後 Tag 變無來源、歷史保留。
8. Modbus TCP：連線參數與位元組順序、Scan Group、Read Block（Function、Base 0）、從讀取結果建立 Tag、手動／進階設定。
9. OPC UA：Endpoint、安全性與登入、測試連線、資料群組、節點樹選取、批次命名、Sampling interval 與 Publishing interval。
10. DataGateway Tag 管理：來源狀態、先建 Tag 再接來源、改名、改連結、移除來源、刪除 Tag（連同歷史）。
11. 歷史保存：保存額度（1 點 100 個 Tag）、四種保存政策、保存規則與試算、保存分類、資料點指派、保存目的端與資料保護、歷史保存總開關。
12. 資料查詢：Current Values（品質、逾時）、History 三步驟與限制（31 天、10,000 筆）。
13. 交給 VisoLink：歷史走 WebAPI（「VisoLink DataGateway」資料來源），即時與回寫走配對碼（「DataGateway 即時」）；重新產生配對碼的影響。
14. 回寫：Agent 連線回寫開關、寫入安全規則、ReadWrite Tag、測試寫入；DataGateway 新增回寫與需求紀錄；從 VisoLink 回寫的四道關卡；以設備讀回為準。
15. 暫存與維護中：DataGateway 與 Agent 各自維護中的差異、暫存上限（預設 7 天、2 GB）、刪除暫存、Agent 端解除註冊會刪除暫存。
16. 監看與排查：服務狀態、Data Flow Logs（S、D、E、G）、Agent Logs 與資訊診斷、常見狀況。
17. 系統維運：系統設定的儲存與套用、登入方式切換、授權（含離線啟用）、Contract 相容、各自的設定備份與備份中心。

### 實作（學員在自己的測試環境）

1. Agent 接設備：依 DataGateway「Agent 連線」卡設定並啟用 DG 連線；建立一條 Modbus TCP 連線（Scan Group、Read Block、從讀取結果建立 Tag）或 OPC UA 連線（節點樹選 Tag、批次命名），至少 3 個 Tag。
2. DataGateway 核准與保存：在 Agent Registry 核准，確認 Online；Tag 管理確認來源狀態正常；調整保存額度、建立保存規則與分類，只指派 2 個 Tag；以 Current Values 與 History 確認有保存政策的 Tag 有歷史、未指派的只有即時值。
3. VisoLink 接即時值與回寫：Agent 開啟連線回寫、建立寫入安全規則、把 1 個 Tag 設為 ReadWrite；VisoLink 以配對碼建立即時來源、即時 View 與即時 DataBinding（Course 05）；在 Runtime 看即時值並送出一次範圍內的回寫；在 DataGateway 需求紀錄與 Agent Write Logs 核對結果與讀回值。

### 驗收標準

- Agent Registry 顯示 Trusted、Online；Tag 來源狀態正常。
- 指派保存政策的 Tag 查得到歷史，未指派的只有即時值，學員能說明原因。
- VisoLink Runtime 顯示即時值；回寫成功且讀回值相符。
- 學員能說出回寫的四道關卡、DataGateway 維護中時 Agent 的暫存與補傳，以及 S、D、E、G 事件的意思。
- Enrollment token、WebAPI 密碼、配對碼未出現在作業紀錄或截圖。

## 十一、Course 08｜備份中心（BackupCenter）

建議時間：150 分鐘。適用：系統管理員。先備：Course 00；VisoLink 自己的備份與 Backup API Token 見 Course 06。對應：備份中心 0.1.0。

### 產品決定（授課時照講）

- 備份＝定時快照：還原回到備份當時的狀態，之後的資料、Agent 緩衝與在途資料不在還原範圍。
- 備份中心獨立：VisoLink、DataGateway、Agent 自己也能手動備份與還原；備份中心加上集中管理、排程與自動化，兩者並存。
- 還原時所有受管主機停工：切到維護中，停止收集、接收、寫入與修改，結束或失敗後切回原本的模式。
- 版本不同不允許還原：主機目前的產品版本必須與備份版本相同；授權不在備份內，換機後向原廠重新申請。

### 單元細節

1. 四個原則與產品自己的備份頁。
2. 第一次使用順序：改帳密 → 備份密碼 → 存放位置 → 受管主機 → 手動備份 → 排程。
3. 登入與帳號：初始帳密只用於第一次登入與救援；登入失敗鎖定；最近操作紀錄。
4. 工作狀態：整體狀態、需要處理、執行中、排隊中、最近結果、重新切回運作中。
5. 備份密碼：AES-256-GCM 加密、只存驗證資料、遺失無法還原、變更只套用到新備份。
6. 存放位置：主機本機資料夾（不能換機還原）、SMB／NFS、FTP／FTPS／SFTP、測試連線、容量、掃描既有備份。
7. 受管主機：登記 VL、DG、Agent（Backup API Token、管理金鑰）、實體主機、連線狀態、停用與刪除。
8. 備份內容：完整、快速設定、自訂；相依類型；換機必要；不在備份中的資料（授權、Tag 歷史值、Agent 緩衝、加密金鑰）。
9. 手動備份與追蹤：選對象、模式、存放位置、備註；確認紀錄、明細與最後成功備份。
10. 排程與保留：四種頻率、預覽、保留份數、立即執行與停用。
11. 執行控制：佇列規則、觸發順序（DG → Agent → VL）、單一工作的資源限制。
12. 備份紀錄：篩選、明細（版本、使用哪一天設定的備份密碼）、刪除手動備份、DG 安裝設定包。
13. 還原：四條規則、事前檢查、原機還原、換機還原、局部還原、衝突策略、還原期間的維護中切換。
14. TagData：DG 內建 TimescaleDB 完整／差異與排程、InfluxDB 初始化與排程、還原與失敗處理。
15. 備份中心自己的設定同步與新機器還原。
16. 日常巡檢。

### 實作（學員在自己的測試環境）

1. 登記受管主機：以測試用憑證登記 VisoLink、DataGateway、Agent 各一台，連線顯示「正常」並帶出版本。
2. 設定存放位置與備份密碼：新增一個存放位置並測試連線；設定備份密碼並以受管控方式保管。
3. 手動備份：對三台主機各做一次快速設定備份，在工作狀態追蹤到成功。
4. 看紀錄：在備份紀錄找到這三筆並核對明細；建立一個每天執行、保留 7 份的排程並預覽接下來 3 次。
5. 還原的事前檢查：在還原頁選一台主機與剛才的備份，走到確認步驟，完成停工、版本、密碼、主機連線的檢查表；講師同意時才在測試環境按「開始還原」。

### 驗收標準

- 工作狀態「全部正常」，三台受管主機連線正常。
- 備份紀錄有三筆手動備份，學員能逐項說明明細。
- 排程已建立且預覽時間正確，保留份數有理由。
- 還原事前檢查表每一項都有依據；學員能說明還原後為什麼會少一段資料、為什麼所有主機都停工、升級後舊版本備份為什麼不能還原。
- Backup API Token、管理金鑰、備份密碼未出現在作業紀錄或截圖。

## 十二、教材製作標準

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
