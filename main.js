// Year stamp
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const btn = document.getElementById('mobileMenuBtn');
const menu = document.getElementById('mobileMenu');
if (btn && menu) {
  const toggle = () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  };
  btn.addEventListener('click', toggle);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  // close on resize to desktop
  window.addEventListener('resize', () => { if (window.innerWidth >= 768) menu.classList.remove('open'); });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
  });
});

// Active nav highlight on scroll
const sections = ['#work','#experience','#writing','#services','#contact','#resume'];
const links = Array.from(document.querySelectorAll('.nav-link'));
const setActive = () => {
  let current = null;
  const offset = window.scrollY + 72;
  for (const id of sections) {
    const el = document.querySelector(id);
    if (el && el.offsetTop <= offset) current = id;
  }
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === current));
};
window.addEventListener('scroll', setActive);
setActive();

// Header shadow after scroll
const header = document.querySelector('.site-header');
const setHeaderState = () => {
  if (!header) return;
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', setHeaderState);
setHeaderState();

// === A/B tile: auto-rotate one flip at a time (pause on hover / hidden tab) ===
(function () {
  const tiles = Array.from(document.querySelectorAll('.ab-grid .tile'));
  if (!tiles.length) return;

  let i = 0, timer = null;
  const tick = () => {
    tiles.forEach(t => t.classList.remove('is-flipped'));
    tiles[i % tiles.length].classList.add('is-flipped');
    i++;
  };
  const start = () => { if (!timer) { tick(); timer = setInterval(tick, 1200); } };
  const stop  = () => { clearInterval(timer); timer = null; };

  tiles.forEach(t => { t.addEventListener('mouseenter', stop); t.addEventListener('mouseleave', start); });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  start();
})();
