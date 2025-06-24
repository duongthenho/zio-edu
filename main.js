document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleSidebar');
  const closeBtn = document.getElementById('closeSidebar');
  const sidebar = document.querySelector('nav.sidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.add('show');
    });
  }

  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('show');
    });
  }
});
const toggleBtn = document.getElementById('toggleSidebar');
const closeBtn = document.getElementById('closeSidebar');
const sidebar = document.querySelector('nav.sidebar');
const overlay = document.getElementById('overlaySidebar');

toggleBtn?.addEventListener('click', () => {
  sidebar?.classList.add('show');
  overlay?.classList.add('show');
});

closeBtn?.addEventListener('click', () => {
  sidebar?.classList.remove('show');
  overlay?.classList.remove('show');
});

overlay?.addEventListener('click', () => {
  sidebar?.classList.remove('show');
  overlay?.classList.remove('show');
});
