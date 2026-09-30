// Menú móvil + acordeón FAQ accesible
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.matches('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
});
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !open);
    document.getElementById(btn.getAttribute('aria-controls')).hidden = open;
  });
});
