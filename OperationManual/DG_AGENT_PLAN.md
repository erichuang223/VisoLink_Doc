# DataGateway／Agent 操作手冊製作規格書

- 建立日期：2026-11-26（T0011，G0002）
- 對應系統：DataGateway／Agent 0.4.0-beta（每頁 `<meta name="doc-systems">`，頁尾由 `assets/doc-version.js` 顯示）
- 事實來源：DEV 實際畫面（DG 管理畫面、Agent 管理畫面）、DG repo `CHANGELOG.md`、DG／Agent 網頁原始碼的頁面與選單（`ServerNavigation.razor`、`AgentNavigation.razor`）
- 版型：沿用 `assets/manual.css`、`assets/manual.js` 與後台手冊的章節頁結構（側欄錨點、`manual-function` 區塊、完成判斷、失敗時先查）

## 執行狀態

- DG 手冊：15 章、58 項功能（2026-11-28 新增第 15 章 API Token 管理）。
- Agent 手冊：13 章、43 項功能（2026-11-28 新增第 13 章 API Token 管理）。
- 截圖：DG 28 張、Agent 22 張（`img/dg/<章節>/`、`img/agent/<章節>/`，JPG）。
- 首頁 `OperationManual/index.html`：新增 MANUAL 03／04 入口與「DataGateway／Agent 功能索引」，索引與章節錨點一對一。

## 撰寫規則

1. 章節依實際左側選單由上而下；登入獨立成第 1 章。總覽頁內的 Agent Registry 因為是獨立工作（核准），DG 另立第 3 章；維護中切換位在系統設定，但獨立成第 14 章方便查找。API Token 管理（DG 在系統設定下、Agent 在系統管理下）是 0.4.0-beta 後加入的頁面，接在最後成 DG 第 15 章、Agent 第 13 章，既有章號與錨點不變。
2. 每項功能固定寫：功能位置、前置條件與權限、操作步驟、完成判斷、失敗時先查；有不可復原的操作加「影響與風險」。
3. 錨點用固定英文 id，首頁索引、章節頁側欄與本表三處一致；改名稱不改錨點。
4. 按鈕與欄位名稱照畫面原文，用「」標示。不寫畫面上沒有的功能。
5. 公開網站限制：不寫 AuthServer、License Center、價格、內部主機名或 IP、客戶資料。位址一律寫成 `<DG 位址>`。
6. 截圖規則：截圖前只在瀏覽器畫面上把 DEV 主機 IP 換成 `dg.example.local`；Enrollment token、WebAPI 帳號與密碼、VisoLink 配對碼保持隱藏；憑證指紋、License Key、授權編號、客戶名稱在畫面上替換為遮蔽文字後再拍。只瀏覽、不改 DEV 設定。
7. 產品決定照寫：沒有保存政策的 Tag 不保存；Agent 只做取得、推送、接收、回寫；DG 維護中時 Agent 暫存、恢復後補傳（Agent 自己維護中則不收集）。Agent Tag 上的「History interval」「保存重複值」是舊版保留欄位，DG 0.4 不依它們保存（`HistoryPolicyIntake.cs`：只經保存規則保存，沒有退回 Tag 舊設定），手冊寫成「保持預設，保存方式在 DG 歷史保存設定」。
8. API Token 章：Token 截圖前把完整值改成假字串、前綴改成 xxxxxxxx，只留本次建立的示範 Token 列（其他開發用 Token 從畫面上隱藏）；帳號名改成 manager。

## DataGateway 章節對照

| 章 | 實際選單 | 檔案 | 功能（固定錨點） |
|---|---|---|---|
| 1. 登入與本機帳號 | 登入頁、系統設定 › 登入與權限 | `dg/login.html` | 1.1 登入 DG 管理畫面（`#dg-login`）<br>1.2 首次使用與救援登入（`#dg-recovery-login`）<br>1.3 建立或變更 DG 本機管理員（`#dg-local-account`）<br>1.4 登出與切換明暗主題（`#dg-logout`） |
| 2. 總覽與容器連線設定資訊 | 總覽（上半部、容器連線設定資訊） | `dg/overview.html` | 2.1 查看 Server 總覽與服務狀態（`#dg-overview`）<br>2.2 Agent 連線資訊（給 Agent 用）（`#dg-connect-agent`）<br>2.3 加值開發 WebAPI（歷史資料讀取）（`#dg-connect-webapi`）<br>2.4 VisoLink 即時與回寫配對碼（`#dg-connect-visolink-pairing`） |
| 3. Agent Registry 核准與解除 | 總覽 › Agent Registry | `dg/agent-registry.html` | 3.1 查看 Agent Registry（`#agent-registry-overview`）<br>3.2 核准 Agent（`#agent-approve`）<br>3.3 拒絕並刪除待核准的 Agent（`#agent-reject`）<br>3.4 解除離線 Agent 的註冊（`#agent-unregister`） |
| 4. 資料查詢（Current Values／History） | 資料查詢 › Current Values／History | `dg/data-query.html` | 4.1 查看即時值（Current Values）（`#current-values`）<br>4.2 歷史查詢步驟 1：找 Tag（`#history-find-tag`）<br>4.3 歷史查詢步驟 2：設定時間與取得方式（`#history-query-settings`）<br>4.4 歷史查詢步驟 3：看趨勢與表格（`#history-results`） |
| 5. Data Flow Logs 資料流事件 | Logs › Data Flow Logs | `dg/data-flow-logs.html` | 5.1 查詢資料流事件（`#dg-flow-logs-query`）<br>5.2 追蹤識別碼與下載當日紀錄（`#dg-flow-logs-trace`） |
| 6. 回寫需求與結果 | 回寫需求與結果 | `dg/write-submissions.html` | 6.1 新增回寫需求（`#write-new`）<br>6.2 查詢需求紀錄與結果（`#write-records`） |
| 7. Tag 管理 | Tag 管理 | `dg/tag-management.html` | 7.1 查看 Tag 與來源狀態（`#tag-list`）<br>7.2 新增 Tag（`#tag-create`）<br>7.3 改名、更換或移除來源（`#tag-edit-source`）<br>7.4 刪除 Tag（`#tag-delete`） |
| 8. 歷史保存設定 | 歷史保存設定（運作總覽、資料點管理、保存分類、保存規則、系統設定） | `dg/history-routing.html` | 8.1 查看運作總覽（`#retention-overview`）<br>8.2 調整保存額度（`#retention-quota`）<br>8.3 建立保存規則（`#retention-rules`）<br>8.4 建立保存分類（`#retention-categories`）<br>8.5 指派資料點的保存分類或規則（`#retention-assign`）<br>8.6 保存目的端與資料保護（`#retention-destinations`）<br>8.7 歷史保存總開關（`#retention-master-switch`） |
| 9. 歷史資料管理 | 歷史資料管理（管理員） | `dg/history-data.html` | 9.1 查看資料總覽（`#history-data-overview`）<br>9.2 資料點與保留建議（`#history-data-suggestions`）<br>9.3 查詢與刪除歷史資料（`#history-data-delete`）<br>9.4 移除 Tag 定義與查看操作紀錄（`#history-data-tag-definitions`） |
| 10. 快取管理 | 快取管理 | `dg/cache.html` | 10.1 查看負荷總覽（`#dg-cache-overview`）<br>10.2 快取維護管理（`#dg-cache-maintenance`）<br>10.3 快取設定（`#dg-cache-settings`） |
| 11. 系統設定 | 系統設定 › 系統設定 | `dg/system-settings.html` | 11.1 查看系統總覽（`#dg-system-overview`）<br>11.2 修改與套用設定（`#dg-settings-edit-apply`）<br>11.3 切換管理員登入方式（`#dg-login-method`）<br>11.4 診斷追蹤與歷史補送（`#dg-diagnostics-backfill`）<br>11.5 查看產品更新紀錄（`#dg-changelog`） |
| 12. 備份與還原 | 系統設定 › 備份與還原 | `dg/backup-restore.html` | 12.1 建立設定備份（`#dg-backup-config`）<br>12.2 還原設定備份（`#dg-restore-config`）<br>12.3 備份 TagData 與 InfluxDB 資料（`#dg-backup-tagdata`）<br>12.4 用 VisoLink 備份中心排程備份（`#dg-backup-center`） |
| 13. 授權管理 | 授權管理（管理員） | `dg/license.html` | 13.1 查看授權狀態與 License Key（`#dg-license-overview`）<br>13.2 新增 License Key（`#dg-license-add`）<br>13.3 離線啟用（`#dg-license-offline`）<br>13.4 查看點數使用狀況（`#dg-license-usage`）<br>13.5 查看授權使用歷史（`#dg-license-history`） |
| 14. 運作中／維護中 | 系統設定 › 系統概覽「運作狀態」 | `dg/operation-mode.html` | 14.1 切到維護中與切回運作中（`#dg-maintenance-switch`）<br>14.2 維護中的影響（`#dg-maintenance-effects`） |
| 15. API Token 管理 | 系統設定 › API Token 管理 | `dg/api-tokens.html` | 15.1 建立 Backup API Token（`#dg-api-token-create`）<br>15.2 複製只顯示一次的 Token，貼到備份中心（`#dg-api-token-copy`）<br>15.3 查看已建立的 Token 與到期提醒（`#dg-api-token-list`）<br>15.4 撤銷 Token（`#dg-api-token-revoke`） |

## Agent 章節對照

| 章 | 實際選單 | 檔案 | 功能（固定錨點） |
|---|---|---|---|
| 1. 登入與本機帳號 | 登入頁 | `agent/login.html` | 1.1 登入 Agent 管理畫面（`#agent-login`）<br>1.2 首次設定登入與救援登入（`#agent-first-login`）<br>1.3 登出與切換明暗主題（`#agent-logout`） |
| 2. 總覽與資訊診斷 | 總覽、資訊診斷 | `agent/overview.html` | 2.1 查看 Agent 總覽（`#agent-overview`）<br>2.2 資訊診斷（`#agent-diagnostics`）<br>2.3 運作中／維護中（`#agent-operation-mode`） |
| 3. DG 連線設定 | DG 連線設定 | `agent/uplink.html` | 3.1 設定並啟用 DG 連線（`#agent-uplink-setup`）<br>3.2 等待 DG 核准與重新申請註冊（`#agent-uplink-approval`）<br>3.3 設定本機暫存保存上限（`#agent-buffer-limits`）<br>3.4 解除這個 DG（改連其他 DG）（`#agent-unregister`） |
| 4. Connections 設備連線 | Connections | `agent/connections.html` | 4.1 查看連線清單（`#connections-list`）<br>4.2 新增設備連線（`#connection-create`）<br>4.3 停用與刪除連線（`#connection-enable-delete`）<br>4.4 開啟或關閉連線回寫（`#connection-writeback`） |
| 5. OPC UA 連線與 Tag | Connections › OPC UA 連線 | `agent/opc-ua.html` | 5.1 建立 OPC UA 連線（`#opc-ua-connection`）<br>5.2 修改連線設定與測試（`#opc-ua-settings`）<br>5.3 建立資料群組（`#opc-ua-data-groups`）<br>5.4 從節點樹選取 Tag（`#opc-ua-tags-browse`）<br>5.5 確認 Tag 異動與批次命名（`#opc-ua-tags-confirm`）<br>5.6 手動／進階設定 Tag（`#opc-ua-tags-manual`） |
| 6. Modbus TCP 連線與 Tag | Connections › Modbus TCP 連線 | `agent/modbus-tcp.html` | 6.1 建立 Modbus TCP 連線（`#modbus-connection`）<br>6.2 設定讀取週期（Scan Groups）（`#modbus-scan-groups`）<br>6.3 設定讀取位置（Read Blocks）（`#modbus-read-blocks`）<br>6.4 從讀取結果建立 Tag（`#modbus-tags-from-read`）<br>6.5 手動／進階設定 Tag（`#modbus-tags-manual`） |
| 7. 回寫與寫入安全規則 | Connections › 連線 › 寫入安全規則 | `agent/write-policies.html` | 7.1 建立寫入安全規則（`#write-policy-create`）<br>7.2 把 Tag 設為可寫並指定規則（`#write-policy-assign-tag`）<br>7.3 測試寫入（`#write-test`）<br>7.4 確認 DG 與 VisoLink 可回寫（`#writeback-verify`） |
| 8. 暫存管理 | 暫存管理 | `agent/buffer.html` | 8.1 查看暫存狀態（`#buffer-overview`）<br>8.2 刪除暫存資料（`#buffer-delete`） |
| 9. Data Flow Logs 與 Write Logs | Logs › Data Flow Logs／Write Logs | `agent/logs.html` | 9.1 查詢 Agent 資料流事件（`#agent-data-flow-logs`）<br>9.2 查詢設備寫入紀錄（`#agent-write-logs`） |
| 10. 帳號設定 | 系統管理 › 帳號設定 | `agent/account.html` | 10.1 修改本機帳號與密碼（`#agent-account`） |
| 11. Agent 資訊 | 系統管理 › Agent 資訊 | `agent/agent-identity.html` | 11.1 修改 Agent 名稱（`#agent-name`）<br>11.2 查看版本資訊（`#agent-version`） |
| 12. 備份與還原 | 系統管理 › 備份與還原 | `agent/backup-restore.html` | 12.1 下載設定備份（`#agent-backup-download`）<br>12.2 安全還原設定（`#agent-restore`）<br>12.3 用 VisoLink 備份中心排程備份（`#agent-backup-center`） |
| 13. API Token 管理 | 系統管理 › API Token 管理 | `agent/api-tokens.html` | 13.1 建立 Backup API Token（`#agent-api-token-create`）<br>13.2 複製只顯示一次的 Token，貼到備份中心（`#agent-api-token-copy`）<br>13.3 查看已建立的 Token 與到期提醒（`#agent-api-token-list`）<br>13.4 撤銷 Token（`#agent-api-token-revoke`） |

## 沒有截圖的畫面

- 登入頁：截圖需登出，而 DEV 不輸入密碼，因此登入章以登入後畫面說明。
- 會改變狀態的視窗（核准、維護中切換、還原、刪除、配對碼重新產生）：只依原始碼與 DEV 操作紀錄寫文字，不拍操作中畫面。
