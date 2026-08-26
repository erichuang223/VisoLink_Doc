# VisoLink 操作手冊製作規格書

- 文件版本：1.0
- 建立日期：2026-08-18
- 適用範圍：前台操作手冊
- 功能基準：`OperationManual/index.html` 的「前台功能」索引
- 製作順序：Display Library → Studio → Runtime

後台製作範圍與階段 F 之後的執行狀態，另見 `BACKEND_PLAN.md`。

## 執行狀態

- 階段 A：完成（前台分章、43 項固定錨點、首頁直達連結）
- 階段 B：完成（Display Library 正式內容與操作圖片）
- 階段 C：完成（Studio 19 項正式內容與操作圖片）
- 階段 D：完成（Runtime 11 項正式內容與操作圖片）
- 階段 E：完成（43 項功能、連結、錨點與圖片總驗證）

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

Studio 的 16 種 Symbol、資料拖曳相容性、Runtime 時間窗及 Data Analysis 設定已依正式介面確認並寫入手冊。

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
folder-create-edit_01.png
folder-create-edit_02.png
display-permission_01.png
symbol-data-binding_01.png
time-marker-create_01.png
time-marker-create_02.png
```

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

狀態使用以下標記：

- `待製作`：功能已列入索引，尚未開始。
- `待確認`：必須先確認正式系統行為或名稱。
- `撰寫中`：文字或 HTML 正在製作。
- `待補圖`：文字已建立，但圖片尚未完成。
- `待驗證`：內容與圖片完成，尚未實際操作驗證。
- `完成`：內容、圖片、連結及實際操作均已驗證。

### 7.1 Chapter 01 — Display Library 圖面庫

目標檔案：`frontend/display-library.html`

| 編號 | 功能名稱 | HTML 錨點 | 圖片基礎檔名 | 狀態 |
|---|---|---|---|---|
| 1.1.1 | 瀏覽圖面庫 | `display-library-overview` | `display-library-overview` | 完成 |
| 1.1.2 | 搜尋與篩選圖面 | `display-search-filter` | `display-search-filter` | 完成 |
| 1.2.1 | 建立與編輯 Folder | `folder-create-edit` | `folder-create-edit` | 完成 |
| 1.2.2 | 整理 Folder 與 Display | `folder-organize-display` | `folder-organize-display` | 完成 |
| 1.2.3 | 刪除 Folder | `folder-delete` | `folder-delete` | 完成 |
| 1.3.1 | 建立 Display | `display-create` | `display-create` | 完成 |
| 1.3.2 | 開啟 Display | `display-open` | `display-open` | 完成 |
| 1.3.3 | 複製 Display | `display-copy` | `display-copy` | 完成 |
| 1.3.4 | 編輯圖面基本資料 | `display-metadata` | `display-metadata` | 完成 |
| 1.3.5 | 刪除 Display | `display-delete` | `display-delete` | 完成 |
| 1.4.1 | Display 授權設定 | `display-permission` | `display-permission` | 完成 |
| 1.4.2 | Folder 授權設定 | `folder-permission` | `folder-permission` | 完成 |
| 1.4.3 | 驗證授權結果 | `permission-validation` | `permission-validation` | 完成 |

### 7.2 Chapter 02 — Studio 圖面編輯

目標檔案：`frontend/studio.html`

| 編號 | 功能名稱 | HTML 錨點 | 圖片基礎檔名 | 狀態 |
|---|---|---|---|---|
| 2.1.1 | 認識 Studio 介面 | `studio-overview` | `studio-overview` | 完成 |
| 2.1.2 | 畫布設定 | `canvas-settings` | `canvas-settings` | 完成 |
| 2.1.3 | 選取與編輯物件 | `object-editing` | `object-editing` | 完成 |
| 2.1.4 | 排列與圖層 | `alignment-layers` | `alignment-layers` | 完成 |
| 2.1.5 | 復原與重做 | `undo-redo` | `undo-redo` | 完成 |
| 2.2.1 | 加入 Symbol | `symbol-add` | `symbol-add` | 完成 |
| 2.2.2 | Symbol 共通屬性 | `symbol-common-properties` | `symbol-common-properties` | 完成 |
| 2.2.3 | 資料顯示元件 | `symbol-data-display` | `symbol-data-display` | 完成 |
| 2.2.4 | 圖表與指示元件 | `symbol-chart-indicator` | `symbol-chart-indicator` | 完成 |
| 2.3.1 | 瀏覽與搜尋圖形 | `graphics-browse-search` | `graphics-browse-search` | 完成 |
| 2.3.2 | 將圖形加入畫布 | `graphics-add-canvas` | `graphics-add-canvas` | 完成 |
| 2.4.1 | 瀏覽與搜尋資料 | `data-browser` | `data-browser` | 完成 |
| 2.4.2 | 拖曳套用資料 | `data-drag-bind` | `data-browser` | 完成 |
| 2.4.3 | Symbol 資料綁定 | `symbol-data-binding` | `symbol-data-binding` | 完成 |
| 2.4.4 | 格式、單位與空值 | `display-format-null` | `symbol-common-properties` | 完成 |
| 2.5.1 | Variable | `variables` | `variables` | 完成 |
| 2.5.2 | Calculation | `calculations` | `calculations` | 完成 |
| 2.6.1 | 儲存圖面 | `display-save` | `display-save` | 完成 |
| 2.6.2 | 預覽圖面 | `display-preview` | `display-preview` | 完成 |

### 7.3 Chapter 03 — Runtime 即時監看

目標檔案：`frontend/runtime.html`

| 編號 | 功能名稱 | HTML 錨點 | 圖片基礎檔名 | 狀態 |
|---|---|---|---|---|
| 3.1.1 | 開啟 Runtime | `runtime-open` | `runtime-overview` | 完成 |
| 3.1.2 | 認識 Runtime 畫面 | `runtime-overview` | `runtime-overview` | 完成 |
| 3.1.3 | 顯示模式 | `runtime-display-mode` | `runtime-display-mode` | 完成 |
| 3.2.1 | 全域時間 Filter | `global-time-filter` | `global-time-filter` | 完成 |
| 3.2.2 | 互動式時間窗 | `interactive-time-window` | `interactive-time-window` | 完成 |
| 3.3.1 | 開啟 Data Analysis | `data-analysis-open` | `data-analysis-open` | 完成 |
| 3.3.2 | Quick Trend | `quick-trend` | `quick-trend` | 完成 |
| 3.3.3 | 建立時間標記 | `time-marker-create` | `time-marker-create` | 完成 |
| 3.3.4 | 管理與比較時間標記 | `time-marker-manage-compare` | `time-marker-manage-compare` | 完成 |
| 3.3.5 | 時間範圍彙整 | `time-range-aggregation` | `time-range-aggregation` | 完成 |
| 3.3.6 | 分析設定 | `analysis-settings` | `analysis-settings` | 完成 |

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
