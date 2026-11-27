# VisoLink 後台操作手冊製作規格書

- 文件版本：2.0（VisoLink 1.4.0-beta 改版，T0010／G0002）
- 建立日期：2026-08-18；改版日期：2026-11-27
- 適用範圍：獨立 Admin 後台操作手冊
- 對應系統：VisoLink 1.4.0-beta（每頁 `<meta name="doc-systems" content="VisoLink 1.4.0-beta">`）
- 功能基準：正式後台 `_Layout.cshtml` 側邊導覽與 DEV 實際畫面；`OperationManual/index.html` 後台功能索引由章節頁一對一產生

## 執行狀態

- 1.2 版（2026-08-18）：階段 F～J 完成，16 章 102 項。
- 1.4 版（2026-11-27，T0010）：依 DEV 實際選單改為 18 章 122 項（新增 DataGateway 即時 7 項、圖庫管理 5 項兩章，其他章新增 8 項）；後台截圖全部重拍為 JPG（44 張），舊 PNG 已刪除，Cache 流程圖（SVG）保留。
- 截圖遮蔽：主機 IP 換成 `vl.example.local`（DG 連線位址為 `dg.example.local`）、用戶端 IP 換成 `192.0.2.10`；WebAPI 帳號、DG 讀取帳號、憑證指紋、License Key、授權編號已遮蔽；服務架構圖的內部授權節點與授權說明中的內部系統名稱不出現在截圖。
- 未實際操作：未切換維護中、未建立 Token、未匯出下載、未刪除或還原；這些流程依原始碼與畫面文字撰寫。

### VL-Admin 選單新舊對照（1.2 → 1.4）

| 1.2 手冊章節 | 1.4 側邊導覽 | 處理 |
|---|---|---|
| 01 Dashboard | 儀表板（系統狀態、需要處理、服務架構圖、各卡片、最近活動） | 改寫內容、重拍 |
| 02 Users | 使用者（新增「檢視權限」有效權限預覽、搜尋篩選） | 新增 `user-effective-permissions` |
| 03 Groups、04 Roles | 群組、角色（搜尋、篩選、排序、分頁） | 改寫清單說明 |
| 05 DataSource | 資料來源（新增 Oracle、VisoLink DataGateway；關聯式資料庫引導式建立與維護工作區） | 新增 4 項 |
| 06 DataBindings | 資料綁定（DataBinding 設定／節點與歸類） | 改寫、重拍 |
| — | **DataGateway 即時**（即時來源、即時 View、即時 DataBinding、權限預覽） | 新增第 07 章 |
| 07 Data Permissions | 資料權限 | 改為第 08 章 |
| 08 Folders、09 Media Library | 資料夾、媒體庫 | 改為第 09、10 章 |
| — | **圖庫管理** | 新增第 11 章 |
| 10～16 | 語系字典、授權管理、稽核紀錄、備份還原、API Token 管理、系統設定、快取管理 | 改為第 12～18 章 |
| 11 License：強制釋放 | 授權管理：點數改為「1 點＝1 台登入中的裝置」，點數使用頁改為「強制登出」 | 錨點 `license-force-release` 保留，內容改為強制登出 |
| 13 Backup | 備份還原（與 VisoLink 備份中心並存） | 新增 `backup-center` |
| 15 System Settings | 系統設定（新增 Client 設定、運作狀態／切到維護中） | 新增 `client-settings`、`operation-mode` |
| 14 API Token | API Token 管理（新增「同時允許讀取與切換運作狀態」） | 改寫建立步驟 |

---

## 功能矩陣（1.4）

| 章節 | 目標檔案 | 功能數 | 固定錨點 | 1.4 狀態 |
|---|---|---:|---|---|
| 01 Dashboard 儀表板 | `backend/dashboard.html` | 4 | `admin-login`, `admin-navigation`, `dashboard-overview`, `dashboard-recent-audit` | 完成（1.4 更新） |
| 02 Users 使用者 | `backend/users.html` | 7 | `users-overview`, `user-create`, `user-edit`, `user-enable-disable`, `user-role-assignment`, `user-delete`, `user-effective-permissions`（新） | 完成（1.4 更新） |
| 03 Groups 群組 | `backend/groups.html` | 5 | `groups-overview`, `group-create-edit`, `group-enable-disable`, `group-members`, `group-delete` | 完成（1.4 更新） |
| 04 Roles 角色 | `backend/roles.html` | 4 | `roles-overview`, `role-create`, `role-types`, `role-delete` | 完成（1.4 更新） |
| 05 DataSource 資料來源與 View | `backend/datasources.html` | 16 | `datasource-overview`, `datasource-create-type`, `datasource-settings`, `datasource-rdb-guided`（新）, `datasource-oracle`（新）, `datasource-vldg`（新）, `datasource-test`, `datasource-enable-disable`, `datasource-edit-delete`, `datasource-workspace`（新）, `views-overview`, `view-create-edit`, `view-source-selection`, `view-query-settings`, `view-field-mapping`, `view-preview` | 完成（1.4 更新） |
| 06 DataBindings | `backend/data-bindings.html` | 10 | `bindings-overview`, `binding-create-edit`, `binding-basic`, `binding-sources-fields`, `binding-result-preview`, `binding-access`, `binding-cache`, `binding-delete`, `nodes-manage`, `nodes-assign` | 完成（1.4 更新） |
| 07 DataGateway 即時 | `backend/dg-realtime.html` | 7 | `dg-realtime-overview`（新）, `dg-source-create`（新）, `dg-source-test`（新）, `dg-realtime-view`（新）, `dg-realtime-binding`（新）, `dg-access-preview`（新）, `dg-push-load`（新） | 新增章節 |
| 08 Data Permissions 資料權限 | `backend/data-permissions.html` | 5 | `permissions-overview`, `permission-create`, `permission-filter`, `permission-update`, `permission-delete` | 完成（1.4 更新） |
| 09 Folders 資料夾 | `backend/folders.html` | 5 | `admin-folders-overview`, `admin-folder-create`, `admin-folder-edit-move`, `admin-folder-permissions`, `admin-folder-delete` | 完成（1.4 更新） |
| 10 Media Library 媒體庫 | `backend/media-library.html` | 5 | `media-overview`, `media-search`, `media-upload`, `media-move-copy`, `media-delete` | 完成（1.4 更新） |
| 11 圖庫管理 | `backend/graphic-library.html` | 5 | `graphic-library-overview`（新）, `graphic-library-organize`（新）, `graphic-edit`（新）, `graphic-upload-svg`（新）, `graphic-smart-create`（新） | 新增章節 |
| 12 Localization 多語系 | `backend/localization.html` | 10 | `localization-dashboard`, `dictionary-filter`, `dictionary-entry`, `dictionary-batch`, `culture-add`, `culture-enable`, `culture-delete`, `localization-export`, `localization-import-validate`, `localization-import-apply` | 完成（1.4 更新） |
| 13 License Management 授權管理 | `backend/license-management.html` | 8 | `license-overview`, `license-filter-details`, `license-add`, `license-offline`, `license-delete`, `license-usage`, `license-force-release`, `license-history` | 完成（1.4 更新） |
| 14 Audit Logs 稽核紀錄 | `backend/audit-logs.html` | 3 | `audit-overview`, `audit-pagination`, `audit-detail` | 完成（1.4 更新） |
| 15 Backup & Restore 備份還原 | `backend/backup-restore.html` | 7 | `backup-create`, `backup-list-download`, `backup-import`, `restore-run`, `backup-delete`, `backup-schedule-guide`, `backup-center`（新） | 完成（1.4 更新） |
| 16 API Token Management | `backend/api-tokens.html` | 4 | `token-overview`, `token-create`, `token-copy`, `token-revoke` | 完成（1.4 更新） |
| 17 System Settings 系統設定 | `backend/system-settings.html` | 9 | `system-overview`, `service-health`, `runtime-environment`, `storage-persistence`, `runtime-settings`, `deployment-info`, `changelog`, `client-settings`（新）, `operation-mode`（新） | 完成（1.4 更新） |
| 18 Cache Management 快取管理 | `backend/cache-management.html` | 8 | `cache-overview`, `cache-server-registry`, `cache-server-test`, `cache-health-topology`, `cache-key-filter`, `cache-delete-selected`, `cache-ttl-policy`, `cache-clear` | 完成（1.4 更新） |
| **合計** | **18 個章節檔案** | **122** | **122 個唯一錨點** | |

---

## 4. 正式內容規格

每個後台功能於後續階段補齊：

1. 功能用途與適用管理角色。
2. 正式導覽路徑與頁面名稱。
3. 操作前提、必要資料與權限。
4. 依正式介面完成的編號步驟。
5. 重要畫面、輸入位置、確認訊息及結果圖片。
6. 成功結果、失敗訊息與優先檢查項目。
7. 對現有資料、前台使用者及服務的影響。
8. 刪除、還原、撤銷、強制釋放及 Cache 清除等操作的風險提示。

## 5. 對外資訊邊界

操作手冊只說明客戶在正式介面可執行與判讀的內容：

- 不公開資料庫初始化、容器名稱、套件版本、連線字串或真實主機路徑。
- 截圖不得包含密碼、API Token、License Key、連線憑證或客戶敏感資料。
- System Settings 可說明服務狀態與畫面用途，但不抄錄客戶環境的實際部署值。
- Cache 以設備分流、狀態、Key 與保存政策說明，不以底層產品名稱作為產品賣點。
- 備份還原、Token、License 與 Cache 危險操作必須先說明影響及確認文字。

## 6. 執行階段

### 階段 G：身分與共同操作

完成 Dashboard、Users、Groups、Roles；確認登入、導覽、帳號生命週期、群組成員及角色限制。

### 階段 H：資料管理

完成 DataSource、View、DataBindings、Data Permissions、Folders、Media Library；驗證資料權限與圖面權限的差別，以及 Studio 可見結果。

### 階段 I：系統與維運

完成 Localization、License Management、Audit Logs、Backup & Restore、API Token Management、System Settings、Cache Management。

### 階段 J：整體驗收

1. 使用正式 Admin 帳號逐項操作並截圖。
2. 以不同權限帳號驗證可見功能與拒絕結果。
3. 比對首頁 122 個索引、章節標題及固定錨點。
4. 檢查所有本機連結、圖片、圖說及重複 ID。
5. 檢查桌面、窄螢幕與列印版面。
6. 確認公開內容沒有敏感部署資訊。

## 7. 實機驗證邊界

正式內容已登入 Admin 後台逐頁核對導覽、欄位、選項與確認流程，並以介面實際狀態製作必要圖片。為避免改動開發資料與產生敏感憑證，本次驗收遵守下列邊界：

- 已檢視所有正式導覽頁、清單、表單與說明文字。
- 已核對 DataSource 類型，以及 Data Permission 的 ResourceType、PrincipalType 與 AccessLevel 正式選項。
- 已核對備份還原、License 強制釋放、Token 撤銷與 Cache 清除的介面及影響說明。
- 未實際建立或顯示 API Token、License Key，也未執行刪除、還原、強制釋放或 Cache 清除。
- 具破壞性或會中斷服務的流程，須在受控驗收環境由授權管理者另行執行結果驗收。
- 不同權限帳號的可見性與拒絕結果，須依客戶正式角色矩陣於導入驗收時確認。
