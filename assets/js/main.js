// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Simple fake newsletter / enquiry handler (prevents reload)
document.addEventListener('submit', (e) => {
  const target = e.target;
  if (target.matches('.newsletter-form') || target.matches('.enquiry-form')) {
    e.preventDefault();
    alert('This is a demo site for learning. You can wire this form to a real backend later.');
  }
});
