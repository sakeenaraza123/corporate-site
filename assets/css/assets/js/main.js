// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
if (btn && menu){
  btn.addEventListener('click', () => {
    const isHidden = menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isHidden));
  });
}
