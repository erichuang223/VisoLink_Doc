# VisoLink 教育訓練課程系列

本目錄以 HTML 簡報取代傳統 PPT。三類受訓對象形成學習路徑，教材則拆成 Course 00–06 七個可獨立授課的主題模組。

## 課程入口

開啟 `index.html`，即可由課程系列目錄進入各階段教材。

完整角色矩陣、每門課的單元細節、實作題與驗收標準，請參考 `CURRICULUM.md`。

正式課程檔案為：

1. `00_VisoLink_Overview.html`
2. `01_Runtime_Operation.html`
3. `02_Studio_Basics.html`
4. `03_DataBinding_and_DataBrowser.html`
5. `04_Calculation_and_Variables.html`
6. `05_DataSource_Management.html`
7. `06_Admin_and_Governance.html`

## 簡報操作

- 下一頁：`→`、`↓`、`PageDown` 或空白鍵
- 上一頁：`←`、`↑` 或 `PageUp`
- 第一頁 / 最末頁：`Home` / `End`
- 右上方按鈕可切換全螢幕或列印成 PDF
- 網址中的 `#s7` 代表第 7 張投影片，可用於分享指定單元

## 教材維護

- 共用視覺樣式：`assets/training.css`
- 翻頁與全螢幕功能：`assets/training.js`
- 課程圖片放在 `img/`，部分沿用 `../ProductIntroduction/assets/img/` 的產品圖；早期版本簡報已移到 `archive/`
- 新增投影片時請延續 `id="s數字"`，並填寫 `data-title`

## 授課建議

- 全體及一般監看人員：Course 00 → 01。
- Studio 設計人員：Course 00 → 01 → 02 → 03 → 04。
- 系統管理員：Course 00 → 01（理解）→ 05 → 06。
- 每門課均應依 `CURRICULUM.md` 擴寫概念、介面、操作、情境、實作與驗收頁。
