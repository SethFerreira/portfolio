const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  setTimeout(() => {
    form.reset();
  }, 50);
});