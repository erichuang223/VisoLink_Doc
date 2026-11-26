/*
 * VisoLink 文件版本標示（全站共用）
 *
 * - 文件版本：整個文件網站一個版本，發行時改這裡的 version、date，並同步改根目錄 VERSION 與 CHANGELOG.md。
 * - 對應系統版本：每一頁在 <head> 自己寫，撰寫或改寫該頁時填當時核對的系統版本，例如
 *     <meta name="doc-systems" content="VL 1.4.0-beta">
 *   沒改寫的頁面保留原本的對應版本。
 * - 顯示位置：頁面的 footer（或 .footer）最後一行；沒有 footer 的頁面加在 body 最後。
 */
(function () {
  var DOC = { version: '1.0.0', date: '2026-09-03' };

  function shortVersion(v) {
    var p = v.split('.');
    return p[2] === '0' ? p[0] + '.' + p[1] : v;
  }

  function render() {
    var meta = document.querySelector('meta[name="doc-systems"]');
    var systems = meta ? meta.getAttribute('content') : '';
    var parts = ['文件 V' + shortVersion(DOC.version)];
    if (systems) parts.push('對應系統：' + systems);
    parts.push('文件發行 ' + DOC.date);

    var el = document.createElement('div');
    el.className = 'doc-version';
    el.textContent = parts.join('｜');
    el.style.cssText = 'width:100%;margin-top:6px;font-size:12px;opacity:.75;text-align:center;';

    var host = document.querySelector('footer') || document.querySelector('.footer');
    if (host) {
      host.appendChild(el);
    } else {
      el.style.margin = '24px 0 16px';
      document.body.appendChild(el);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
