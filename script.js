// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

// Scroll fade-in
const faders = document.querySelectorAll('.fade-section');

function appearOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  faders.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);
