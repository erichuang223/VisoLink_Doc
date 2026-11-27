# VisoLink 教育訓練課程系列

本目錄以 HTML 簡報取代傳統 PPT。四類受訓對象形成學習路徑，教材則拆成 Course 00–08 九個可獨立授課的主題模組。

- 對應系統版本：Course 00–06 對應 VisoLink 1.4.0-beta（Course 00 另含 DataGateway・Agent 0.4.0-beta、備份中心 0.1.0 的產品家族概觀）；Course 07 對應 DataGateway／Agent 0.4.0-beta；Course 08 對應備份中心 0.1.0。
- 每頁頁尾會自動顯示文件版本與對應系統版本。

## 課程入口

開啟 `index.html`，即可由課程系列目錄進入各階段教材。

完整角色矩陣、每門課的單元細節、實作題與驗收標準，請參考 `CURRICULUM.md`。

正式課程檔案為：

1. `00_VisoLink_Overview.html`：產品家族概觀（VisoLink、DataGateway、Agent、備份中心）與共同語言；先備章節 `00_TimeSeries_Fundamentals.html`
2. `01_Runtime_Operation.html`：Runtime 操作、分析、手機與平板 RWD、班別切換、設備回寫、網址參數、維護中畫面
3. `02_Studio_Basics.html`：Studio 畫面設計、Display／Symbol 樣本、底板、新圖庫與智慧圖形、RWD 版面
4. `03_DataBinding_and_DataBrowser.html`：資料瀏覽與綁定、即時與歷史、替換 DataBinding、匯出入、回寫表單設定
5. `04_Calculation_and_Variables.html`：Variable 與 Calculation
6. `05_DataSource_Management.html`：資料來源（含 Oracle、引導式設定、VisoLink DataGateway 歷史）、DataGateway 即時與配對碼
7. `06_Admin_and_Governance.html`：權限與有效權限預覽、圖庫管理、Client 設定、授權點數、運作中／維護中、備份與備份中心
8. `07_DataGateway_and_Agent.html`：Agent 接 Modbus TCP／OPC UA 設備、DataGateway 核准 Agent、Tag 管理與保存政策、即時與歷史查詢、配對碼交給 VisoLink、回寫與寫入安全規則、暫存與維護中、事件排查
9. `08_BackupCenter.html`：備份中心的備份密碼、存放位置、受管主機、備份模式、手動備份與排程、備份紀錄、還原規則與事前檢查、原機／換機／局部還原、TagData

## 簡報操作

- 下一頁：`→`、`↓`、`PageDown` 或空白鍵
- 上一頁：`←`、`↑` 或 `PageUp`
- 第一頁 / 最末頁：`Home` / `End`
- 右上方按鈕可切換全螢幕或列印成 PDF
- 網址中的 `#s7` 代表第 7 張投影片，可用於分享指定單元

## 教材維護

- 共用視覺樣式：`assets/training.css`
- 翻頁與全螢幕功能：`assets/training.js`
- 截圖：優先直接引用操作手冊的畫面 `../OperationManual/img/...`，手冊更新截圖時教材同步更新；`img/` 只剩少數手冊沒有對應畫面的早期版本截圖（圖說會註明）；早期版本簡報已移到 `archive/`
- 新增投影片時請延續 `id="s數字"`，並填寫 `data-title`
- 每頁 `<head>` 要有 `<meta name="doc-systems" content="對應系統版本">` 並載入 `../assets/doc-version.js`
- 公開網站：不放帳密、配對碼、Token、內部主機位址或客戶資料

## 授課建議

- 全體及一般監看人員：Course 00 → 01。
- Studio 設計人員：Course 00 → 01 → 02 → 03 → 04。
- 系統管理員：Course 00 → 01（理解）→ 05 → 06 → 08。
- 資料整合與 OT 管理員：Course 00 → 07 → 05（DataGateway 即時與回寫）。
- 每門課均應依 `CURRICULUM.md` 擴寫概念、介面、操作、情境、實作與驗收頁。
