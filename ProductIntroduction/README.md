# VisoLink 產品介紹

本目錄只負責「售前認識產品」。介紹的是以 VisoLink 為主軸的產品家族：VisoLink（視覺化平台）、VisoLink DataGateway 與 DataGateway Agent（現場資料取得）、VisoLink 備份中心（集中備份與還原）。內容固定分為兩個角度：

1. `business/index.html`：業務版產品介紹，面向決策者、業務、顧問與潛在客戶。先講 VisoLink 的核心論述，再介紹產品家族、DataGateway／Agent 與備份中心。
2. `technical/index.html`：技術版產品介紹，面向 IT、OT、系統架構師、導入與維運人員。含產品家族架構圖、VisoLink 與 DataGateway 的整合點、各產品部署與共同的維運規則。

入口頁 `index.html` 連到這兩份介紹。目前對應系統版本：VisoLink 1.4.0-beta、DataGateway／Agent 0.4.0-beta、備份中心 0.1.0（每頁頁尾也會顯示）。

## 文件邊界

| 文件區域 | 回答的問題 | 不處理的內容 |
|---|---|---|
| 業務版 | 為什麼需要 VisoLink、帶來什麼價值、如何導入 | API、資料表、逐步操作、課堂練習 |
| 技術版 | 系統如何組成、如何整合、部署、治理與擴充 | 銷售話術、逐按鈕操作、完整教學 |
| `../OperationManual/` | 每一個功能在哪裡、如何操作、結果與注意事項 | 售前說服與產品定位 |
| `../Training/` | 不同角色如何學會使用、實作與驗收 | 產品規格與對外發行聲明 |

## 內容治理

- 所有對外產品事實以 `source/PRODUCT_FACTS.md` 為共同來源。
- 兩份介紹的核心命題、因果鏈與證據順序定義於 `source/CONTENT_STRATEGY.md`。
- 新功能先更新產品事實與狀態，再分別改寫業務版與技術版。
- 不使用 `indexV2`、`final`、`new` 等檔名區分版本；版本與更新日期寫在文件內。
- 舊版本放入 `archive/`（依整理月份分資料夾，例如 `archive/2026-11/` 是改寫成產品家族前的 VisoLink 1.2 版），不得再作為對外入口。
- 公開網站：只寫客戶看得到的產品內容；廠商內部系統、商業條件、內部 IP、帳密、客戶名都不寫。
- 操作手冊與教育訓練是售後文件，不複製進本目錄。

## 維護順序

1. 依正式產品與操作手冊更新 `source/PRODUCT_FACTS.md`。
2. 更新 `business/index.html` 的客戶價值表達。
3. 更新 `technical/index.html` 的能力、架構與限制。
4. 檢查圖片、連結、功能狀態與更新日期。
