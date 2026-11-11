const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.textContent = '☰';
  };

  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) closeMenu();
  });
}

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = String(new Date().getFullYear());
});

const archiveTools = document.querySelector('[data-archive-tools]');
if (archiveTools) {
  const search = document.querySelector('#project-search');
  const buttons = [...document.querySelectorAll('[data-archive-filter]')];
  const groups = [...document.querySelectorAll('[data-group]')];
  const count = document.querySelector('[data-result-count]');
  const empty = document.querySelector('[data-archive-empty]');
  const allowed = new Set(['all', 'academic', 'sep', 'oct', 'nov', 'ideas']);
  const initial = new URLSearchParams(window.location.search).get('filter');
  let activeFilter = allowed.has(initial) ? initial : 'all';

  const updateArchive = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visibleCount = 0;
    groups.forEach(group => {
      let groupCount = 0;
      group.querySelectorAll('[data-project]').forEach(card => {
        const matchesFilter = activeFilter === 'all' || card.dataset.filter === activeFilter;
        const matchesSearch = !query || card.dataset.search.includes(query);
        const show = matchesFilter && matchesSearch;
        card.hidden = !show;
        if (show) {
          groupCount += 1;
          visibleCount += 1;
        }
      });
      group.hidden = groupCount === 0;
    });
    buttons.forEach(button => {
      const selected = button.dataset.archiveFilter === activeFilter;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    count.textContent = String(visibleCount);
    empty.hidden = visibleCount !== 0;
  };

  buttons.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.archiveFilter;
    const url = new URL(window.location.href);
    if (activeFilter === 'all') url.searchParams.delete('filter');
    else url.searchParams.set('filter', activeFilter);
    window.history.replaceState({}, '', url);
    updateArchive();
  }));
  search.addEventListener('input', updateArchive);
  updateArchive();
}
