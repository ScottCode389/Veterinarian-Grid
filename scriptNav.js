const navSlide = () => {
  const menuToggle = document.querySelector('.js-menu-toggle');
  const nav = document.querySelector('.js-nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-nav');
    menuToggle.classList.toggle('is-active');
  })
}

navSlide();