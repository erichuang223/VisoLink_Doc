document.addEventListener("DOMContentLoaded", () => {
  const navLinks = [...document.querySelectorAll(".manual-nav a[href^='#']")];
  const chapters = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (chapters.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    }, { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.25, 0.6] });
    chapters.forEach((chapter) => observer.observe(chapter));
  }
});
