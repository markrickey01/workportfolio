(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const id = this.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
    });
  });

  // Active nav on scroll
  const sections = ['#work','#experience','#writing','#services','#contact'];
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

  // Fake contact submit
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks — I\'ll get back to you.');
      form.reset();
    });
  }
})();
