// new Typed('.auto-type', {
//   strings: ['One', 'Two', 'Three'],
//   typeSpeed: 150,
//   backSpeed: 150,
//   loop: true
// });

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});