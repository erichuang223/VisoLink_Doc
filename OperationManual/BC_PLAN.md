# VisoLink 備份中心（BackupCenter）操作手冊製作規格書

- 建立日期：2026-11-27（T0012，G0002）
- 對應系統：備份中心 0.1.0（每頁 `<meta name="doc-systems">`，頁尾由 `assets/doc-version.js` 顯示）
- 事實來源：DEV 與本機開發環境的實際畫面（備份中心管理畫面；2026-11-28 起受管主機、手動備份、紀錄、還原前檢查、TagData 改在本機開發環境操作截圖）、BC repo `CHANGELOG.md`、管理畫面原始碼（`Layout/MainLayout.razor` 選單、`Pages/*.razor`、`Components/*.razor`）與還原換機指引（`RestoreController.cs`）
- 版型：沿用 `assets/manual.css`、`assets/manual.js` 與 DG／Agent 手冊的章節頁結構（側欄錨點、`manual-function` 區塊、功能位置／所需權限與前置條件／影響、步驟、完成判斷、失敗時先查）

## 執行狀態

- BC 手冊：13 章、53 項功能（2026-11-28 第 9 章新增 9.2「取得 VL、DG、Agent 的 Backup API Token」）。
- 截圖：32 張（`img/bc/<分類>/`，JPG）；另引用 DG、Agent 手冊的 Token 截圖各 1 張。
- 受管主機憑證：VL、DG、Agent 都用各自畫面「API Token 管理」建立的 Backup API Token（DG／Agent 0.4.0-beta 起提供畫面；不再寫 .env 的管理金鑰）。
- 首頁 `OperationManual/index.html`：新增 MANUAL 05 入口與「備份中心功能索引」，索引與章節錨點一對一。

## 撰寫規則

1. 章節依實際左側選單由上而下（監控 › 工作狀態；產品備份 › 備份內容、排程、備份紀錄、還原；歷史資料 › TagData 資料庫；設定 › 受管主機、存放位置、執行控制與備份密碼）；登入獨立成第 1 章。手動備份（入口在工作狀態與受管主機）獨立成第 4 章；自身設定同步與新機器還原（分散在執行控制與存放位置）獨立成第 12 章；帳號（右上角選單）放最後。
2. 每項功能固定寫：功能位置、所需權限與前置條件、影響（有影響時）、操作步驟、完成判斷、失敗時先查；不可復原的操作加警告。
3. 錨點用固定英文 id（`bc-` 開頭），首頁索引、章節頁側欄與本表三處一致；改名稱不改錨點。
4. 按鈕與欄位名稱照畫面原文，用「」標示。不寫畫面上沒有的功能。
5. 公開網站限制：不寫內部授權系統的名稱（畫面上提到時改寫「向原廠重新申請授權」）、價格、內部主機名或 IP、客戶資料。位址一律寫成 `<備份中心位址>` 或 `*.example.local`。
6. 截圖規則：截圖前只在瀏覽器畫面上把 DEV 主機 IP 換成 `*.example.local`、登入帳號換成示範名；不拍備份密碼、Backup API Token（完整值改成假字串、前綴改成 xxxxxxxx）、存放位置帳密、主機金鑰或憑證指紋；畫面上的本機與容器位址改成 `vl.example.local`／`dg.example.local`／`agent.example.local`。開發環境自己的測試主機與紀錄在截圖前從畫面上隱藏。展示名稱用虛構示範名（示範本機備份區、示範每日備份）。
7. 產品決定照寫：備份＝定時快照；備份中心獨立、各產品自己也能備份；還原時所有受管主機停工（維護中）；版本不同不允許還原。
8. 還原、換機、局部還原、衝突策略、TagData 還原、新機器還原：依原始碼文字撰寫，不在 DEV 執行（只開到設定畫面截圖，不按最後確認）。

## 章節對照

| 章 | 實際選單 | 檔案 | 功能（固定錨點） |
|---|---|---|---|
| 1. 登入與第一次設定 | 登入頁、右上角帳號選單 | `bc/login.html` | 1.1 登入備份中心管理畫面（`#bc-login`）<br>1.2 第一次登入：改成自己的帳號密碼（`#bc-first-login`）<br>1.3 忘記密碼：救援登入（`#bc-recovery-login`）<br>1.4 登出與切換明暗主題（`#bc-logout`） |
| 2. 工作狀態 | 監控 › 工作狀態 | `bc/status.html` | 2.1 查看整體狀態與統計（`#bc-status-overview`）<br>2.2 處理「需要處理」清單（`#bc-status-attention`）<br>2.3 查看執行中、排隊中與最近結果（`#bc-status-jobs`）<br>2.4 還原後主機沒切回運作中（`#bc-status-back-to-running`） |
| 3. 備份內容 | 產品備份 › 備份內容 | `bc/content.html` | 3.1 三種備份模式（`#bc-content-modes`）<br>3.2 VisoLink（VL）的資料類型（`#bc-content-vl`）<br>3.3 DataGateway（DG）的資料類型（`#bc-content-dg`）<br>3.4 DG-Agent 的資料類型（`#bc-content-agent`） |
| 4. 手動備份 | 工作狀態 ›「手動備份」、受管主機 › 各列「手動備份」 | `bc/manual-backup.html` | 4.1 建立手動備份（`#bc-manual-backup`）<br>4.2 追蹤備份進度（`#bc-manual-backup-progress`）<br>4.3 確認備份已寫入存放位置（`#bc-manual-backup-check`） |
| 5. 排程與保留 | 產品備份 › 排程 | `bc/schedules.html` | 5.1 新增產品備份排程（`#bc-schedule-create`）<br>5.2 設定頻率（`#bc-schedule-frequency`）<br>5.3 保留份數與自動清理（`#bc-schedule-retention`）<br>5.4 立即執行、編輯與停用排程（`#bc-schedule-run-now`） |
| 6. 備份紀錄 | 產品備份 › 備份紀錄 | `bc/records.html` | 6.1 查詢與篩選備份紀錄（`#bc-records-filter`）<br>6.2 查看備份明細（`#bc-records-detail`）<br>6.3 刪除手動備份（`#bc-records-delete`）<br>6.4 下載 DG 安裝設定包（換機用）（`#bc-install-pack`） |
| 7. 還原 | 產品備份 › 還原 | `bc/restore.html` | 7.1 還原前先了解的規則（`#bc-restore-rules`）<br>7.2 原機還原（`#bc-restore-same-host`）<br>7.3 換機還原（`#bc-restore-replace`）<br>7.4 局部還原（`#bc-restore-partial`）<br>7.5 衝突策略（`#bc-restore-conflict`）<br>7.6 還原期間的維護中切換（`#bc-restore-maintenance`） |
| 8. TagData 資料庫 | 歷史資料 › TagData 資料庫 | `bc/tagdata.html` | 8.1 DG 內建 TimescaleDB：立即備份（`#bc-tagdata-timescale-backup`）<br>8.2 DG 內建 TimescaleDB：排程與保留（`#bc-tagdata-timescale-schedule`）<br>8.3 DG 內建 TimescaleDB：還原（`#bc-tagdata-timescale-restore`）<br>8.4 InfluxDB：備份初始化與立即備份（`#bc-tagdata-influx-init`）<br>8.5 InfluxDB：排程（`#bc-tagdata-influx-schedule`）<br>8.6 InfluxDB：還原（`#bc-tagdata-influx-restore`） |
| 9. 受管主機 | 設定 › 受管主機 | `bc/hosts.html` | 9.1 查看受管主機清單（`#bc-hosts-overview`）<br>9.2 取得 VL、DG、Agent 的 Backup API Token（`#bc-host-tokens`）<br>9.3 登記 VL、DG、Agent（`#bc-host-add`）<br>9.4 連線狀態的意思（`#bc-host-status`）<br>9.5 編輯、停用與刪除主機（`#bc-host-edit`） |
| 10. 存放位置 | 設定 › 存放位置 | `bc/storage.html` | 10.1 新增主機本機資料夾（`#bc-storage-local`）<br>10.2 新增網路共用資料夾（SMB、NFS）（`#bc-storage-network`）<br>10.3 新增 FTP、FTPS、SFTP（`#bc-storage-ftp`）<br>10.4 測試連線、容量與編輯（`#bc-storage-test`）<br>10.5 掃描既有備份（`#bc-storage-scan`） |
| 11. 執行控制與備份密碼 | 設定 › 執行控制與備份密碼 | `bc/control.html` | 11.1 設定與變更備份密碼（`#bc-backup-password`）<br>11.2 佇列規則（`#bc-queue-rules`）<br>11.3 單一工作的資源限制（`#bc-resource-limits`） |
| 12. 自身設定同步與新機器還原 | 設定 › 執行控制與備份密碼 ›「備份中心自己的設定」、存放位置 ›「掃描既有備份」 | `bc/new-machine.html` | 12.1 同步備份中心自己的設定（`#bc-self-sync`）<br>12.2 在新機器還原備份中心（`#bc-new-machine-restore`）<br>12.3 還原後的確認（`#bc-new-machine-check`） |
| 13. 帳號 | 右上角帳號選單 ›「變更帳號密碼」 | `bc/account.html` | 13.1 變更帳號密碼（`#bc-account-change`）<br>13.2 查看最近操作紀錄（`#bc-account-audit`） |

## 截圖清單

- `img/bc/account/account.jpg`
- `img/bc/backup/content-vl.jpg`
- `img/bc/backup/manual-backup-targets.jpg`、`manual-backup-storage.jpg`（手動備份視窗）
- `img/bc/backup/records-list.jpg`、`records-detail.jpg`（備份紀錄與明細）
- `img/bc/backup/schedule-targets.jpg`、`schedule-frequency.jpg`、`schedule-list.jpg`（示範每日備份，停用狀態）
- `img/bc/restore/restore-steps.jpg`、`restore-select.jpg`、`restore-content.jpg`、`restore-precheck.jpg`（只開到開始還原前）
- `img/bc/settings/control-password.jpg`（未設定）、`control-password-set.jpg`（已設定）、`control-password-change.jpg`（空白的變更視窗）
- `img/bc/settings/control-queue.jpg`
- `img/bc/settings/hosts-list.jpg`、`hosts-add-vl.jpg`、`hosts-add-dg.jpg`、`hosts-add-agent.jpg`
- `img/bc/settings/vl-token-create.jpg`、`vl-token-shown.jpg`、`vl-token-list.jpg`（VL 後台 API Token 管理）
- `img/bc/settings/storage-list.jpg`、`storage-new-local.jpg`
- `img/bc/status/status-attention.jpg`、`status-running.jpg`、`status-recent.jpg`
- `img/bc/tagdata/tagdata-backup-now.jpg`、`tagdata-overview.jpg`、`tagdata-points.jpg`
- 引用：`img/dg/api-tokens/shown.jpg`、`img/agent/api-tokens/shown.jpg`

## 沒有截圖的畫面

- 登入頁：截圖需登出，而 BC 的登入只在指定分頁有效，因此登入章以文字說明。
- 會改變狀態或需要密碼的操作中畫面（還原進度、TagData 還原、新機器還原、刪除、換機）：依原始碼文字撰寫，不實際執行；還原只截到「開始還原」前的檢查畫面。
- 授權提示裡的內部系統名稱：截圖前在畫面上改寫成「向原廠重新申請授權」。
