# VisoLink 後台操作手冊製作規格書

- 文件版本：1.1（圖文操作強化）
- 建立日期：2026-08-18
- 適用範圍：獨立 Admin 後台操作手冊
- 正式介面：`VisoLink.Admin`，預設本機入口 `http://localhost:6002/`
- 功能基準：正式後台 `_Layout.cshtml` 側邊導覽、Razor Pages 路由及 `OperationManual/index.html` 後台功能索引

## 執行狀態

- 階段 F：完成（正式導覽盤點、16 章分檔、102 項固定錨點、首頁直達索引）
- 階段 G：完成（Dashboard、Users、Groups、Roles）
- 階段 H：完成（DataSource、DataBindings、Data Permissions、Folders、Media Library）
- 階段 I：完成（Localization、License、Audit、Backup、API Token、System Settings、Cache）
- 階段 J：完成（功能索引、危險操作、圖片、連結、敏感資訊與版面總驗收）

---

## 1. 階段 F 盤點結論

原首頁以 12 個粗略分類描述後台，但正式獨立 Admin 後台實際有 Dashboard 加上 15 個導覽項目，共 16 個章節。階段 F 已改以正式導覽為準。

主要修正如下：

1. `System Status` 並非獨立導覽，正式功能位於 `System Settings`。
2. View 管理屬於 DataSource 內的正式工作流程，不獨立成側邊導覽。
3. DataBinding 節點及資料歸類屬於 DataBindings 範圍。
4. 圖面 Folder／Display 權限與 Data Permissions 是不同權限面向，手冊不得混寫。
5. 補入舊索引遺漏的 DataBindings、Folders、Media Library、License Management、API Token Management 與 System Settings。
6. Cache 對外統一稱為 Cache；手冊說明多台 Cache Server 與負荷分流能力，不以底層產品名稱作為主角。

## 2. 文件結構

```text
OperationManual/
├─ BACKEND_PLAN.md
├─ backend.html                 # 相容轉接頁
└─ backend/
   ├─ index.html
   ├─ dashboard.html
   ├─ users.html
   ├─ groups.html
   ├─ roles.html
   ├─ datasources.html
   ├─ data-bindings.html
   ├─ data-permissions.html
   ├─ folders.html
   ├─ media-library.html
   ├─ localization.html
   ├─ license-management.html
   ├─ audit-logs.html
   ├─ backup-restore.html
   ├─ api-tokens.html
   ├─ system-settings.html
   └─ cache-management.html
```

後台每個正式導覽項目使用獨立 HTML。所有功能錨點必須同時存在於首頁索引、章節頁與本規格書。

## 3. 功能製作矩陣

階段 F 建立固定功能範圍、檔案與錨點；階段 G 至 I 已補齊正式操作內容與必要圖片。

| 章節 | 目標檔案 | 功能數 | 固定錨點 | 階段 F |
|---|---|---:|---|---|
| 01 Dashboard | `backend/dashboard.html` | 4 | `admin-login`, `admin-navigation`, `dashboard-overview`, `dashboard-recent-audit` | 完成 |
| 02 Users | `backend/users.html` | 6 | `users-overview`, `user-create`, `user-edit`, `user-enable-disable`, `user-role-assignment`, `user-delete` | 完成 |
| 03 Groups | `backend/groups.html` | 5 | `groups-overview`, `group-create-edit`, `group-enable-disable`, `group-members`, `group-delete` | 完成 |
| 04 Roles | `backend/roles.html` | 4 | `roles-overview`, `role-create`, `role-types`, `role-delete` | 完成 |
| 05 DataSource | `backend/datasources.html` | 12 | `datasource-overview`, `datasource-create-type`, `datasource-settings`, `datasource-test`, `datasource-enable-disable`, `datasource-edit-delete`, `views-overview`, `view-create-edit`, `view-source-selection`, `view-query-settings`, `view-field-mapping`, `view-preview` | 完成 |
| 06 DataBindings | `backend/data-bindings.html` | 10 | `bindings-overview`, `binding-create-edit`, `binding-basic`, `binding-sources-fields`, `binding-result-preview`, `binding-access`, `binding-cache`, `binding-delete`, `nodes-manage`, `nodes-assign` | 完成 |
| 07 Data Permissions | `backend/data-permissions.html` | 5 | `permissions-overview`, `permission-create`, `permission-filter`, `permission-update`, `permission-delete` | 完成 |
| 08 Folders | `backend/folders.html` | 5 | `admin-folders-overview`, `admin-folder-create`, `admin-folder-edit-move`, `admin-folder-permissions`, `admin-folder-delete` | 完成 |
| 09 Media Library | `backend/media-library.html` | 5 | `media-overview`, `media-search`, `media-upload`, `media-move-copy`, `media-delete` | 完成 |
| 10 Localization | `backend/localization.html` | 10 | `localization-dashboard`, `dictionary-filter`, `dictionary-entry`, `dictionary-batch`, `culture-add`, `culture-enable`, `culture-delete`, `localization-export`, `localization-import-validate`, `localization-import-apply` | 完成 |
| 11 License Management | `backend/license-management.html` | 8 | `license-overview`, `license-filter-details`, `license-add`, `license-offline`, `license-delete`, `license-usage`, `license-force-release`, `license-history` | 完成 |
| 12 Audit Logs | `backend/audit-logs.html` | 3 | `audit-overview`, `audit-pagination`, `audit-detail` | 完成 |
| 13 Backup & Restore | `backend/backup-restore.html` | 6 | `backup-create`, `backup-list-download`, `backup-import`, `restore-run`, `backup-delete`, `backup-schedule-guide` | 完成 |
| 14 API Token Management | `backend/api-tokens.html` | 4 | `token-overview`, `token-create`, `token-copy`, `token-revoke` | 完成 |
| 15 System Settings | `backend/system-settings.html` | 7 | `system-overview`, `service-health`, `runtime-environment`, `storage-persistence`, `runtime-settings`, `deployment-info`, `changelog` | 完成 |
| 16 Cache Management | `backend/cache-management.html` | 8 | `cache-overview`, `cache-server-registry`, `cache-server-test`, `cache-health-topology`, `cache-key-filter`, `cache-delete-selected`, `cache-ttl-policy`, `cache-clear` | 完成 |
| **合計** | **16 個章節檔案** | **102** | **102 個唯一錨點** | **完成** |

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
3. 比對首頁 102 個索引、章節標題及固定錨點。
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
