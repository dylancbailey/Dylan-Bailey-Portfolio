// new Typed('.auto-type', {
//   strings: ['One', 'Two', 'Three'],
//   typeSpeed: 150,
//   backSpeed: 150,
//   loop: true
// });

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.forEach(e => {
    console.log(e.target);
  });
});