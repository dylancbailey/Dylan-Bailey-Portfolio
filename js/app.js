//mobile nav
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

//typed
var options = {
  strings: ['beautiful.^1000', 'creative.^1000', 'fluid.^1000', 'reactive.^1000'],
  typeSpeed: 150,
  forwardSpeed: 150,
  backSpeed: 150,
  loop: true
};

var typed = new Typed('.auto-type', options);