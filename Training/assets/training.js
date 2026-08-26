(() => {
  const slides = [...document.querySelectorAll('.slide')];
  if (!slides.length) return;
  const progress = document.querySelector('.progress span');
  const indicator = document.querySelector('.page-indicator');
  let index = 0;

  const fromHash = () => {
    const id = location.hash.slice(1);
    const found = slides.findIndex(slide => slide.id === id);
    return found >= 0 ? found : 0;
  };

  const render = (next, updateHash = true) => {
    index = Math.max(0, Math.min(slides.length - 1, next));
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
      slide.dataset.page = `${i + 1} / ${slides.length}`;
    });
    if (progress) progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    if (indicator) indicator.textContent = `${index + 1} / ${slides.length}`;
    if (updateHash) history.replaceState(null, '', `#${slides[index].id}`);
    document.title = `${slides[index].dataset.title || slides[index].querySelector('h1,h2')?.textContent || 'VisoLink Training'}｜VisoLink`;
  };

  document.querySelectorAll('[data-nav="prev"]').forEach(button => button.addEventListener('click', () => render(index - 1)));
  document.querySelectorAll('[data-nav="next"]').forEach(button => button.addEventListener('click', () => render(index + 1)));
  document.querySelectorAll('[data-action="fullscreen"]').forEach(button => button.addEventListener('click', async () => {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  }));
  document.querySelectorAll('[data-action="print"]').forEach(button => button.addEventListener('click', () => window.print()));
  document.addEventListener('keydown', event => {
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); render(index + 1); }
    if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) { event.preventDefault(); render(index - 1); }
    if (event.key === 'Home') { event.preventDefault(); render(0); }
    if (event.key === 'End') { event.preventDefault(); render(slides.length - 1); }
  });
  window.addEventListener('hashchange', () => render(fromHash(), false));
  render(fromHash(), false);
})();
