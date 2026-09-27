// Remember an explicit language choice so the root page stops auto-redirecting.
document.querySelectorAll<HTMLAnchorElement>('a[data-lang]').forEach((a) => {
  a.addEventListener('click', () => {
    try {
      localStorage.setItem('lang', a.dataset.lang!);
    } catch {}
  });
});

// Close the language menu on outside click or Escape.
const menu = document.querySelector<HTMLDetailsElement>('details.lang');
if (menu) {
  document.addEventListener('click', (e) => {
    if (menu.open && !menu.contains(e.target as Node)) menu.open = false;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
}
