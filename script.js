const hamburgerMenuBtn = document.querySelector('#hamburger-menu');

hamburgerMenuBtn.addEventListener('click', (e) => {
  const navMenu = document.querySelector('#menu');
  const overlay = document.querySelector('.overlay')
  const hamburgerIcon = document.querySelector('#btn-icon')

  hamburgerIcon.src = navMenu.classList.contains('active') 
    ? './images/icon-menu.svg' 
    : './images/icon-menu-close.svg';


  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');
})