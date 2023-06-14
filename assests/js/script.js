const navbar = document.querySelector('.header');
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

let btn = document.querySelector('.burger_menu');
btn.addEventListener('click', () => {
  const navbarCollapse = document.querySelector('.main-nav');
  var burger = document.querySelector('.burger_menu');
  var body = document.querySelector('body')
  burger.classList.toggle('open');
  navbarCollapse.classList.toggle('show__nav');
  body.classList.toggle('no_scroll');

})
