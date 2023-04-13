let menuIcon = document.querySelector('.menu-icon');
let navList = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('show');
});