// Variables
const hamburgerMenuBtn = document.querySelector('#hamburger-menu');

// Functions
const changeImage = () => {
  const img = document.querySelector('.main-image');
  const screenSize = window.innerWidth;

  if(screenSize < 700) {
    img.src = './images/image-web-3-mobile.jpg';
  }else {
    img.src = './images/image-web-3-desktop.jpg';
  }
}
window.onload = changeImage();

// Event Listeners
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

window.addEventListener('resize', (e) => {
  changeImage();
})