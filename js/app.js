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

//scroll
const observer = new IntersectionObserver( (entries) => {
  entries.forEach( (entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e) => observer.observe(e));
