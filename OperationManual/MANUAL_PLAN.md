# VisoLink 操作手冊製作規格書

- 文件版本：2.0（VisoLink 1.4.0-beta 改版，T0010／G0002）
- 建立日期：2026-08-18；改版日期：2026-11-27
- 適用範圍：前台操作手冊
- 對應系統：VisoLink 1.4.0-beta（每頁 `<meta name="doc-systems" content="VisoLink 1.4.0-beta">`，頁尾由 `assets/doc-version.js` 顯示）
- 功能基準：`OperationManual/index.html` 的「前台功能」索引（由各章節 `<section class="manual-function">` 一對一產生）
- 製作順序：Display Library → Studio → Runtime

後台製作範圍與狀態，另見 `BACKEND_PLAN.md`。

## 執行狀態

- 1.2 版（2026-08-18）：階段 A～E 完成，43 項功能。
- 1.4 版（2026-11-27，T0010）：依 DEV（VisoLink 1.4.0-beta）實際畫面改寫三章，共 67 項功能（新增 24 項）；改版畫面全部重拍為 JPG，舊 PNG 已刪除。
- 截圖：前台 46 張（`img/frontend/<章節>/`）。截圖前只在瀏覽器畫面把主機 IP 換成示範網域；示範資料為虛構的「示範化工廠」。
- 未附圖：Runtime「建立時間標記」「管理與比較時間標記」「時間範圍彙整」三項。DEV 當時 DataGateway 歷史保存沒有資料（View 預覽「此 View 未傳回任何欄位」），趨勢無法點選時間點，只保留文字。登入頁（保存登入）與維護中畫面因不登出、不切換維護中，只依原始碼文字撰寫。

### VL-Client 選單新舊對照（1.2 → 1.4）

| 位置 | 1.2 手冊 | 1.4 實際畫面 | 處理 |
|---|---|---|---|
| 上方導覽 | Display Library | 「Displays 清單」＋「Symbol 樣本」兩頁；右上新增「匯入」「匯出」 | 新增 `symbol-sample-library`、`display-export-import` |
| 圖面庫 | 私有、格狀／表格 | 新增「底板」篩選、狀態卡（Display、授權・登入中、即時連線、資料來源）、卡片 RWD／底板／使用中標記、批次列「加入與變更底板」、載入失敗「重新載入」 | 新增 `display-list-status`、`display-base-layer-batch` |
| 新增 Display | 名稱輸入框 | 「從 Display 樣本建立」（空白＋樣本，加入 Display 樣本、樣本選單編輯／編輯資訊／權限／刪除） | 改寫 `display-create`，新增 `display-samples` |
| Display 設定 | 重新命名、轉換擁有者、另存為、權限 | 新增「可作為底板」 | 改寫 `display-metadata` |
| Studio 標題列 | 預覽資料、Runtime、儲存 | 新增 Canvas／RWD 切換、Display 字典、替換 DataBinding、「?」 | 新增 `studio-rwd`、`studio-rwd-preview`、`studio-replace-binding` |
| Studio 工具列 | 復原…群組 | 新增「存成 Symbol 樣本」「加入底板／更換底板」；貼上可跨分頁 | 新增 `studio-symbol-samples`、`studio-base-layer`、`studio-copy-paste` |
| Studio 左側 | Symbols、圖庫、圖層、資料、計算、變數 | 新增「Symbol 樣本」「回寫」；資料標示 Realtime 即時／History 歷史 | 新增 `studio-writeback-form`、`studio-realtime-history` |
| Symbols | 16 種 | 18 種（新增和弦圖；圓餅圖、進度等改中文名） | 新增 `studio-chord` |
| 圖庫 | 舊版工業圖形分類 | 新圖庫（PID 管道智慧圖形、P&ID 常用、閥門…）；舊版圖庫已移除 | 改寫 `graphics-browse-search`，新增 `studio-smart-graphics`；舊圖庫說明已刪 |
| 屬性面板 | 各元件不一 | 統一面板；數值 6 種版面、表格 7 種樣式；規則新增介於、包含、無值 | 新增 `studio-value-table-styles`、`studio-style-rules` |
| Runtime 上方 | 介面語系、Editor、Displays 清單、授權 | 新增「查詢資訊」「?」網址參數、Canvas／RWD、即時狀態列 | 新增 `runtime-url-params`、`runtime-rwd`、`runtime-realtime-marks` |
| Runtime 工具列 | 固定畫布、全畫面、移動… | 新增「回寫表單」「資料標籤」；工具列設定記憶 | 新增 `runtime-writeback`，改寫 `runtime-display-mode` |
| 時間範圍 | 最近時間、日曆區間、自訂、擴充條件 | 擴充條件可由 Admin「Client 設定」設定班別 | 新增 `runtime-shift-switch` |
| 登入／維護 | — | 登入頁「保存登入」；維護中畫面 | 新增 `runtime-login-remember`、`runtime-maintenance` |
| 移除 | 舊版圖庫 | 不存在 | 手冊不再提及 |

---

## 1. 文件目的

本規格書用來管理 VisoLink 前台操作手冊的製作範圍、檔案結構、功能對應、圖片需求與驗收狀態。

操作手冊的目標不是教學課程，而是讓使用者可以依功能名稱快速找到以下資訊：

1. 功能位於哪一個畫面。
2. 使用功能前需要具備哪些條件與權限。
3. 應該依照什麼順序操作。
4. 每一步需要點選或設定什麼內容。
5. 操作完成後應該得到什麼結果。
6. 操作失敗時應該先檢查什麼。

---

## 2. 規劃基準與同步原則

### 2.1 功能範圍基準

`OperationManual/index.html` 最下方的「功能階層索引」是對外顯示的功能總索引，也是操作手冊目前的功能範圍基準。

前台功能固定分為三個主要章節：

1. Display Library 圖面庫
2. Studio 圖面編輯
3. Runtime 即時監看

### 2.2 一對一對應規則

首頁索引與操作手冊必須維持一對一關係：

- 首頁每個功能項目都必須有一個可直接開啟的手冊位置。
- 每個手冊功能都必須出現在首頁功能索引中。
- 首頁功能名稱、手冊標題及規劃表名稱必須一致。
- 每個功能使用固定的英文 HTML 錨點，不因章節重新編號而改變。
- 新增、刪除或改名功能時，必須同時更新首頁索引、手冊內容與本規格書。
- 首頁索引連結必須指向「功能本身」，不能只停留在章節頁首。

### 2.3 已確認與後續實務驗證事項

前台三章已依正式系統介面完成。下列涉及資料生命週期或跨帳號權限結果的項目，仍應在客戶正式環境依管理政策再次驗證：

- Folder 刪除時，內含 Display 的處理規則。
- Display 刪除後的結果及是否有復原機制。
- Folder 授權與 Display 授權的繼承、覆寫及優先順序。
- Folder 與 Display 授權在不同角色、群組及帳號下的實際結果。

Studio 的 18 種 Symbol、資料拖曳相容性、Runtime 時間窗及 Data Analysis 設定已依正式介面確認並寫入手冊。

---

## 3. 目標檔案結構

前台正式內容採用「一個大章節一個 HTML」的拆分方式：

```text
OperationManual/
├─ index.html
├─ MANUAL_PLAN.md
├─ frontend/
│  ├─ index.html
│  ├─ display-library.html
│  ├─ studio.html
│  └─ runtime.html
├─ backend.html
├─ assets/
│  ├─ manual.css
│  └─ manual.js
└─ img/
   ├─ frontend/
   │  ├─ display-library/
   │  ├─ studio/
   │  └─ runtime/
   └─ backend/
```

### 3.1 檔案責任

| 檔案 | 用途 |
|---|---|
| `index.html` | 全站入口及前、後台完整功能階層索引 |
| `frontend/index.html` | 前台三大章節入口及前台目錄 |
| `frontend/display-library.html` | Display Library 所有功能說明 |
| `frontend/studio.html` | Studio 所有功能說明 |
| `frontend/runtime.html` | Runtime 所有功能說明 |
| `MANUAL_PLAN.md` | 內部規劃、製作狀態及驗收依據 |

原有的 `frontend.html` 在完成拆分及連結驗證前保留；拆分完成後，改為前台入口轉接頁或由 `frontend/index.html` 取代。

---

## 4. HTML 連結與錨點規格

### 4.1 首頁索引連結格式

```html
<a href="frontend/display-library.html#folder-create-edit">建立與編輯 Folder</a>
<a href="frontend/studio.html#symbol-data-binding">Symbol 資料綁定</a>
<a href="frontend/runtime.html#time-marker-create">建立時間標記</a>
```

### 4.2 錨點命名規則

- 使用小寫英文。
- 使用連字號分隔單字。
- 名稱描述功能，不使用章節數字作為唯一識別。
- 錨點一旦對外使用，除非功能移除，不任意變更。
- 同一個 HTML 中不得出現重複 `id`。

### 4.3 導覽規格

每一個章節頁面都必須提供：

- 返回操作手冊首頁。
- 返回前台手冊首頁。
- 本章功能目錄。
- 目前閱讀位置標示。
- 上一個功能與下一個功能導覽。
- 返回本章頂端。

---

## 5. 單一功能內容規格

每一個功能使用相同的內容結構：

1. **功能名稱**：與首頁索引完全一致。
2. **功能用途**：說明此功能可以完成什麼工作。
3. **適用角色**：一般使用者、圖面設計者或管理者。
4. **所需權限**：檢視、使用、編輯或管理等必要權限。
5. **功能位置**：使用完整導覽路徑表示。
6. **操作前提**：操作前必須已經存在的資料或設定。
7. **操作步驟**：使用編號步驟，一個步驟只描述一個主要動作。
8. **操作圖片**：在重要畫面轉換、設定或確認位置放置圖片。
9. **預期結果**：說明成功後畫面或資料應呈現的狀態。
10. **注意事項**：補充權限、資料影響或不可逆操作。
11. **常見問題**：只列出與此功能直接相關的問題。
12. **相關功能**：連到前置設定或下一步操作。

### 5.1 文字撰寫規則

- 以使用者在正式畫面上看到的名稱為準。
- 按鈕、欄位、選單及狀態名稱保留正式 UI 名稱。
- 操作步驟使用「點選」、「輸入」、「選擇」、「確認」等明確動詞。
- 不使用教育訓練式的學習目標、課堂練習或測驗。
- 不公開內部技術架構、資料庫初始化、套件版本或不屬於客戶操作的部署細節。
- 不把尚未驗證的推測寫成產品行為。

---

## 6. 圖片製作規格

### 6.1 圖片目錄

```text
img/frontend/display-library/
img/frontend/studio/
img/frontend/runtime/
```

### 6.2 圖片命名

使用功能錨點作為檔名基礎；同一功能有多張圖片時加入步驟編號：

```text
folder-create-edit_01.jpg
display-create_02.jpg
rwd-editor.jpg
writeback-form.jpg
```

1.4 版起截圖存成 JPG（瀏覽器擷取原始格式）；新功能以功能內容命名。

### 6.3 圖片內容要求

- 截圖必須使用正式版介面。
- 圖片應保留足以辨識功能所在位置的畫面範圍。
- 使用框線、箭頭或編號標示實際點選位置。
- 一張圖片原則上只表達一個主要操作重點。
- 不顯示真實帳號、密碼、連線資訊或敏感資料。
- 圖片下方必須有圖說，說明使用者應注意的位置或結果。
- 介面改版後必須重新確認圖片與文字是否仍一致。

---

## 7. 前台功能製作矩陣

狀態：`完成（1.4 新增）`＝1.4 新寫；`完成（1.4 更新）`＝沿用錨點、依 1.4 畫面改寫或重拍。圖片欄為該功能使用的檔名（`img/frontend/<章節>/`，JPG）。

### 7.1 Chapter 01 — Display Library 圖面庫

目標檔案：`frontend/display-library.html`

| 編號 | 功能名稱 | HTML 錨點 | 圖片 | 狀態 |
|---|---|---|---|---|
| 1.1.1 | 瀏覽圖面庫 | `display-library-overview` | `display-library-overview.jpg` | 完成（1.4 更新） |
| 1.1.2 | 搜尋與篩選圖面 | `display-search-filter` | — | 完成（1.4 更新） |
| 1.1.3 | 清單狀態卡、背景與重新載入 | `display-list-status` | — | 完成（1.4 新增） |
| 1.2.1 | 建立與編輯 Folder | `folder-create-edit` | `folder-create-edit_01.jpg` | 完成（1.4 更新） |
| 1.2.2 | 整理 Folder 與 Display | `folder-organize-display` | `folder-organize-display_01.jpg`、`display-batch-select.jpg` | 完成（1.4 更新） |
| 1.2.3 | 刪除 Folder | `folder-delete` | — | 完成（1.4 更新） |
| 1.3.1 | 建立 Display | `display-create` | `display-create_01.jpg`、`display-create_02.jpg` | 完成（1.4 更新） |
| 1.3.2 | 開啟 Display | `display-open` | — | 完成（1.4 更新） |
| 1.3.3 | 複製 Display | `display-copy` | `display-settings.jpg` | 完成（1.4 更新） |
| 1.3.4 | 編輯圖面基本資料 | `display-metadata` | — | 完成（1.4 更新） |
| 1.3.5 | 刪除 Display | `display-delete` | — | 完成（1.4 更新） |
| 1.3.6 | 管理 Display 樣本 | `display-samples` | `display-sample-add.jpg`、`display-sample-manage.jpg` | 完成（1.4 新增） |
| 1.3.7 | 匯出與匯入 Display | `display-export-import` | `display-export.jpg` | 完成（1.4 新增） |
| 1.3.8 | 批次加入與變更底板 | `display-base-layer-batch` | `display-batch-select.jpg`、`base-layer-batch.jpg` | 完成（1.4 新增） |
| 1.3.9 | Symbol 樣本頁 | `symbol-sample-library` | `symbol-sample-library.jpg` | 完成（1.4 新增） |
| 1.4.1 | Display 授權設定 | `display-permission` | `display-settings.jpg` | 完成（1.4 更新） |
| 1.4.2 | Folder 授權設定 | `folder-permission` | `folder-permission_01.jpg` | 完成（1.4 更新） |
| 1.4.3 | 驗證授權結果 | `permission-validation` | — | 完成（1.4 更新） |

### 7.2 Chapter 02 — Studio 圖面編輯

目標檔案：`frontend/studio.html`

| 編號 | 功能名稱 | HTML 錨點 | 圖片 | 狀態 |
|---|---|---|---|---|
| 2.1.1 | 認識 Studio 介面 | `studio-overview` | `studio-overview.jpg` | 完成（1.4 更新） |
| 2.1.2 | 畫布設定 | `canvas-settings` | `canvas-settings.jpg` | 完成（1.4 更新） |
| 2.1.3 | 選取與編輯物件 | `object-editing` | — | 完成（1.4 更新） |
| 2.1.4 | 排列與圖層 | `alignment-layers` | `alignment-layers.jpg` | 完成（1.4 更新） |
| 2.1.5 | 復原與重做 | `undo-redo` | — | 完成（1.4 更新） |
| 2.1.6 | 跨分頁複製貼上 | `studio-copy-paste` | — | 完成（1.4 新增） |
| 2.2.1 | 加入 Symbol | `symbol-add` | `symbol-add.jpg` | 完成（1.4 更新） |
| 2.2.2 | Symbol 共通屬性 | `symbol-common-properties` | `symbol-common-properties.jpg` | 完成（1.4 更新） |
| 2.2.3 | 資料顯示元件 | `symbol-data-display` | — | 完成（1.4 更新） |
| 2.2.4 | 圖表與指示元件 | `symbol-chart-indicator` | — | 完成（1.4 更新） |
| 2.2.5 | 數值與表格樣式 | `studio-value-table-styles` | `value-styles.jpg`、`table-styles.jpg` | 完成（1.4 新增） |
| 2.2.6 | 和弦圖（Chord） | `studio-chord` | `chord.jpg` | 完成（1.4 新增） |
| 2.2.7 | 樣式規則 | `studio-style-rules` | — | 完成（1.4 新增） |
| 2.3.1 | 瀏覽與搜尋圖形 | `graphics-browse-search` | `graphics-browse-search.jpg` | 完成（1.4 更新） |
| 2.3.2 | 將圖形加入畫布 | `graphics-add-canvas` | — | 完成（1.4 更新） |
| 2.3.3 | 智慧圖形 | `studio-smart-graphics` | — | 完成（1.4 新增） |
| 2.4.1 | 瀏覽與搜尋資料 | `data-browser` | `data-browser.jpg` | 完成（1.4 更新） |
| 2.4.2 | 即時與歷史資料標示 | `studio-realtime-history` | — | 完成（1.4 新增） |
| 2.4.3 | 拖曳套用資料 | `data-drag-bind` | — | 完成（1.4 更新） |
| 2.4.4 | Symbol 資料綁定 | `symbol-data-binding` | `symbol-data-binding.jpg`、`trend-series.jpg` | 完成（1.4 更新） |
| 2.4.5 | 格式、單位與空值 | `display-format-null` | — | 完成（1.4 更新） |
| 2.4.6 | 替換 DataBinding | `studio-replace-binding` | `replace-databinding.jpg` | 完成（1.4 新增） |
| 2.5.1 | Variable | `variables` | `variables.jpg` | 完成（1.4 更新） |
| 2.5.2 | Calculation | `calculations` | `calculations.jpg` | 完成（1.4 更新） |
| 2.6.1 | 儲存圖面 | `display-save` | `display-save.jpg` | 完成（1.4 更新） |
| 2.6.2 | 預覽圖面 | `display-preview` | `studio-overview.jpg` | 完成（1.4 更新） |
| 2.7.1 | Symbol 樣本 | `studio-symbol-samples` | `symbol-sample-save.jpg`、`symbol-sample-insert.jpg` | 完成（1.4 新增） |
| 2.7.2 | Display 底板 | `studio-base-layer` | `base-layer-add.jpg`、`base-layer-runtime.jpg` | 完成（1.4 新增） |
| 2.8.1 | RWD 版面編輯 | `studio-rwd` | `rwd-editor.jpg` | 完成（1.4 新增） |
| 2.8.2 | RWD 預覽 | `studio-rwd-preview` | `rwd-preview.jpg` | 完成（1.4 新增） |
| 2.9.1 | 回寫表單設定 | `studio-writeback-form` | `writeback-form-settings.jpg` | 完成（1.4 新增） |

### 7.3 Chapter 03 — Runtime 即時監看

目標檔案：`frontend/runtime.html`

| 編號 | 功能名稱 | HTML 錨點 | 圖片 | 狀態 |
|---|---|---|---|---|
| 3.1.1 | 登入與保存登入 | `runtime-login-remember` | — | 完成（1.4 新增） |
| 3.1.2 | 開啟 Runtime | `runtime-open` | — | 完成（1.4 更新） |
| 3.1.3 | 認識 Runtime 畫面 | `runtime-overview` | `runtime-overview.jpg` | 完成（1.4 更新） |
| 3.1.4 | 即時與歷史資料標示 | `runtime-realtime-marks` | — | 完成（1.4 新增） |
| 3.1.5 | 顯示模式與工具列記憶 | `runtime-display-mode` | `runtime-display-mode.jpg` | 完成（1.4 更新） |
| 3.1.6 | 手機與平板 RWD 顯示 | `runtime-rwd` | `runtime-rwd.jpg` | 完成（1.4 新增） |
| 3.1.7 | Runtime 網址參數與「?」說明 | `runtime-url-params` | `runtime-url-params.jpg` | 完成（1.4 新增） |
| 3.1.8 | 維護中畫面 | `runtime-maintenance` | — | 完成（1.4 新增） |
| 3.2.1 | 全域時間 Filter | `global-time-filter` | — | 完成（1.4 更新） |
| 3.2.2 | 班別一鍵切換 | `runtime-shift-switch` | `global-time-filter.jpg` | 完成（1.4 新增） |
| 3.2.3 | 互動式時間窗 | `interactive-time-window` | `interactive-time-window.jpg` | 完成（1.4 更新） |
| 3.3.1 | 開啟 Data Analysis | `data-analysis-open` | `data-analysis-open.jpg` | 完成（1.4 更新） |
| 3.3.2 | Quick Trend | `quick-trend` | `quick-trend.jpg` | 完成（1.4 更新） |
| 3.3.3 | 建立時間標記 | `time-marker-create` | — | 完成（1.4 更新）；DEV 無歷史資料，未附圖 |
| 3.3.4 | 管理與比較時間標記 | `time-marker-manage-compare` | — | 完成（1.4 更新）；DEV 無歷史資料，未附圖 |
| 3.3.5 | 時間範圍彙整 | `time-range-aggregation` | — | 完成（1.4 更新）；DEV 無歷史資料，未附圖 |
| 3.3.6 | 分析設定 | `analysis-settings` | `analysis-settings.jpg` | 完成（1.4 更新） |
| 3.4.1 | 設備回寫表單 | `runtime-writeback` | `writeback-form.jpg` | 完成（1.4 新增） |

---

## 8. 製作階段

### 階段 A：結構與連結

1. 建立 `frontend/` 目錄。
2. 建立前台入口及三個章節 HTML。
3. 將目前 `frontend.html` 的功能骨架拆入對應章節。
4. 建立本規格書定義的固定錨點。
5. 將 `index.html` 每個前台功能改成可點選連結。
6. 驗證所有首頁索引連結均能開啟正確功能位置。

完成條件：首頁每個前台功能都能直接連到對應的章節與功能標題。

### 階段 B：Display Library

1. 依功能矩陣確認正式畫面與操作路徑。
2. 撰寫功能用途、權限、前提、步驟與結果。
3. 補齊 Folder、Display 及授權相關圖片。
4. 以不同權限帳號驗證實際顯示結果。
5. 更新規劃表狀態。

完成條件：Chapter 01 所有功能均達到「完成」。

### 階段 C：Studio

1. 確認正式版 Symbol 完整清單。
2. 完成編輯器、畫布、物件操作與圖層內容。
3. 完成 Symbol、Graphic Library、Data Browser、Variable 與 Calculation。
4. 驗證儲存及預覽流程。
5. 更新規劃表狀態。

完成條件：Chapter 02 所有功能均達到「完成」。

### 階段 D：Runtime

1. 完成 Runtime 基本操作與顯示模式。
2. 完成時間情境控制。
3. 完成 Data Analysis、Quick Trend 與 Time Marker。
4. 驗證不同時間情境與分析結果。
5. 更新規劃表狀態。

完成條件：Chapter 03 所有功能均達到「完成」。

### 階段 E：整體驗收

1. 比對首頁索引與三章內容，確認無缺項或多餘項目。
2. 檢查所有本機連結與 HTML 錨點。
3. 檢查圖片檔案是否存在、圖說是否正確。
4. 使用一般使用者與不同權限角色實際操作。
5. 檢查桌面、窄螢幕與列印版面。
6. 更新文件版本與日期。

---

## 9. 驗收標準

單一功能只有在下列條件全部成立時，才能標示為「完成」：

- 功能存在於首頁功能階層索引。
- 首頁功能名稱與手冊標題一致。
- 首頁連結可以直接開啟功能位置。
- 功能用途、角色、權限與操作前提已完成。
- 操作步驟已依正式系統驗證。
- 重要操作都有對應圖片及圖說。
- 預期結果與實際系統一致。
- 注意事項沒有公開不適合客戶閱讀的內部資訊。
- 相關功能連結可以正常使用。
- 桌面與行動版面均可閱讀。

整個前台手冊只有在三個章節的所有正式功能均達到上述條件後，才視為完成。

---

## 10. 變更管理

新增或調整產品功能時，依下列順序更新：

1. 更新本規格書的功能製作矩陣。
2. 更新 `index.html` 功能階層索引。
3. 新增或修改章節中的功能內容與固定錨點。
4. 補充或更換操作圖片。
5. 驗證首頁連結與實際操作。
6. 更新操作手冊版本及日期。

不得只修改手冊正文而未更新首頁索引，也不得只新增首頁索引而沒有對應的操作內容。
