// common.js — Portal Consola

// ─── Active nav link ───
(function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();


// ─── Corte page: tab switching CMD / PS ───
(function initTabs() {
  const btnCmd = document.getElementById('tab-cmd');
  const btnPs  = document.getElementById('tab-ps');
  const secCmd = document.getElementById('sec-cmd');
  const secPs  = document.getElementById('sec-ps');

  if (!btnCmd || !btnPs) return; // not on a corte page

  function activate(tab) {
    btnCmd.classList.toggle('active', tab === 'cmd');
    btnPs.classList.toggle('active',  tab === 'ps');
    secCmd.classList.toggle('visible', tab === 'cmd');
    secPs.classList.toggle('visible',  tab === 'ps');
  }

  btnCmd.addEventListener('click', () => activate('cmd'));
  btnPs.addEventListener('click',  () => activate('ps'));

  activate('cmd'); // default
})();
