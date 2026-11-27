# VisoLink 文件中心

本 repository 集中維護 VisoLink 的對外產品介紹、使用者操作手冊與教育訓練教材，並與應用程式原始碼分開進行版本控制。

VisoLink 是可自行部署的工業資料視覺化平台，串接既有的資料來源、資料整理與綁定、衍生計算、自由畫布設計、Runtime 監看分析及企業治理。平台的目標是補足工業資料視覺化的最後一哩：讓具權限的現場人員能持續建立與改善監控畫面，同時保留企業對資料、權限、版本、稽核、備份及維運的治理能力。

VisoLink 產品家族包含四個可各自部署、各自運作的產品：

| 產品 | 定位 |
|---|---|
| VisoLink | 工業資料視覺化平台（主軸） |
| VisoLink DataGateway | 設備資料中樞：Tag 管理、歷史保存、即時與歷史查詢、設備回寫 |
| DataGateway Agent | 現場資料取得：以 Modbus TCP、OPC UA 讀取設備資料並推送給 DataGateway |
| VisoLink 備份中心（BackupCenter） | 中央排程備份與還原 VisoLink、DataGateway、Agent |

## 線上文件入口

以下三個連結是 GitHub Pages 的主要入口，可從公開首頁直接開啟：

| 文件區 | 適用對象 | 內容 | 開啟網站 |
|---|---|---|---|
| 產品介紹 | 決策者、業務、顧問、IT／OT 與導入人員 | 產品價值、核心能力、技術架構、部署與治理 | **[開啟產品介紹](ProductIntroduction/)** |
| 操作手冊 | 一般使用者、Studio 設計人員、系統管理員、DataGateway／Agent 管理員、備份管理員 | VisoLink 前台與後台、DataGateway、Agent、備份中心的功能位置、操作步驟及注意事項 | **[開啟操作手冊](OperationManual/)** |
| 教育訓練 | 監看人員、Studio 設計人員、系統管理員與講師 | 依角色規劃的 Course 00–06 教材、實作與驗收標準 | **[開啟教育訓練](Training/)** |

### 各區延伸頁面

- 產品介紹：[業務版](ProductIntroduction/business/)｜[技術版](ProductIntroduction/technical/)
- 操作手冊：[前台手冊](OperationManual/frontend.html)｜[後台手冊](OperationManual/backend.html)｜[DataGateway 手冊](OperationManual/dg/)｜[Agent 手冊](OperationManual/agent/)｜[備份中心手冊](OperationManual/bc/)（備份中心 0.1.0：受管主機、存放位置、備份密碼、手動備份與排程、備份紀錄、原機與換機還原、TagData、新機器還原）
- 教育訓練：[完整課綱](Training/CURRICULUM.html)（各課程簡報請由教育訓練首頁進入）

建議閱讀順序：初次認識產品先開啟「產品介紹」；實際使用時查閱「操作手冊」；規劃授課、上線導入或角色交接時使用「教育訓練」。

## 文件範圍

```text
VisoLink_Doc/
├── ProductIntroduction/   # 業務版、技術版產品介紹與共同事實來源
├── OperationManual/       # VisoLink 前台／後台、DataGateway、Agent、備份中心操作手冊
└── Training/              # HTML 課程簡報、課綱與教學素材
```

- `ProductIntroduction/source/PRODUCT_FACTS.md` 是業務版與技術版產品介紹的共同事實來源。
- `ProductIntroduction/source/CONTENT_STRATEGY.md` 定義產品介紹的核心主張、論述順序與內容邊界。
- `ProductIntroduction/archive/` 僅保存歷史版本，不作為目前的對外入口。
- `OperationManual/` 說明功能在哪裡、如何操作、預期結果及風險。
- `Training/` 說明不同角色如何學習、實作、驗收與交接。

本 repository 不包含 VisoLink 應用程式原始碼、開發環境、部署腳本或客戶環境設定。

## 文件版本

文件有文件的版本，系統有系統的版本，兩者分開管理：

- **文件版本**：整個文件網站一個版本，記在根目錄 `VERSION`；每一版改了什麼、對應哪些系統版本，見 [`CHANGELOG.md`](CHANGELOG.md)。目前文件版本：**V1.0**。
- **版號規則**（`主.次.修`）：主版＝新增產品或文件結構改版；次版＝跟著系統新版補充內容；修訂＝錯字、截圖、連結修正，或系統由預發行轉為正式版、內容不變只更新對應版本。
- **對應系統版本**：每一頁在 `<head>` 以 `<meta name="doc-systems" content="VL 1.2.0">` 註明撰寫時核對的系統版本；頁尾會自動顯示「文件版本｜對應系統｜文件發行日期」。
- **發行**：更新 `VERSION`、`assets/doc-version.js` 的版本與日期、`CHANGELOG.md`，提交後推送；版本標籤格式 `v1.0.0`。

## 產品與文件基準

- 已發行的文件 V1.0 對應 `VisoLink v1.2.0`。
- 改版中的內容對應：VisoLink `1.4.0-beta`、DataGateway／Agent `0.4.0-beta`、備份中心 `0.1.0`；每一頁實際對應的版本以頁尾標示為準。
- 目前產品事實基準日期：2026-11-26（`ProductIntroduction/source/PRODUCT_FACTS.md`）。
- 各產品由相鄰且獨立的 repository 維護（VisoLink、DataGateway 與 Agent、備份中心各一個）。
- VisoLink 主要由 Client、Server API、Admin、PostgreSQL 與 Cache 服務構成，支援以 Docker Compose 在企業環境自行部署。

文件中的版號與日期代表內容核對基準，不表示所有文件永久只適用該版本。功能是否正式可用，應以產品版本、正式介面、操作手冊及發行紀錄的交叉核對結果為準。

## 本機預覽（僅供維護者使用）

下列 `localhost` 網址只適用於已下載本 repository、並在自己的電腦啟動預覽伺服器時；它們不是 GitHub Pages 的公開網址。線上閱讀請使用上方「線上文件入口」。

HTML 文件可直接以瀏覽器開啟各區的 `index.html`。若瀏覽器限制本機檔案載入，可在 repository 根目錄啟動簡易 HTTP Server（擇一）：

```powershell
python -m http.server 8080
# 或（沒有 Python、有 Docker 時）
docker run --rm -d --name visolink-doc-preview -p 8080:80 -v "${PWD}:/usr/share/nginx/html:ro" nginx:alpine
```

啟動後，在本機瀏覽器輸入：

```text
http://localhost:8080/ProductIntroduction/
http://localhost:8080/OperationManual/
http://localhost:8080/Training/
```

## 維護原則

當 `VisoLink_V1` 新增、調整或移除正式功能時，依下列順序更新文件：

1. 核對產品版號、`CHANGELOG.md`、正式介面與實際行為。
2. 更新 `ProductIntroduction/source/PRODUCT_FACTS.md` 的能力、狀態與基準日期。
3. 更新操作手冊中的入口、步驟、結果、圖片及風險提示。
4. 分別更新業務版與技術版產品介紹，避免將預覽或 Roadmap 功能描述為正式能力。
5. 更新相關課程、實作題與驗收標準。
6. 檢查所有相對連結、圖片、頁面導覽、桌面／窄螢幕與列印版面。

提交文件時請遵守以下原則：

- 程式碼變更與文件變更分別提交至各自的 repository。
- Commit 訊息應指出文件區域及對應的產品版本或功能，例如 `docs(manual): update DataBinding for v1.2.0`。
- 不以 `final`、`new` 或 `indexV2` 等檔名表示目前版本；目前入口使用固定檔名，歷史內容移至 `archive/`。
- 不提交密碼、API Token、License Key、連線憑證、客戶資料或真實環境位址。
- 截圖與範例資料應先完成去識別化，並確認未洩露部署與帳號資訊。

## 相關專案

- `VisoLink_V1`：VisoLink 主應用程式、版本資訊與發行紀錄。
- `VisoLink_DataGateway_V0.2`：DataGateway 與 Agent（共用版本），內容與版本由該 repository 獨立維護。
- `VisoLink_BackupCenter`：VisoLink 備份中心。
