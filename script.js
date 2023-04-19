let menuIcon = document.querySelector('.menu-icon');
let navList = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('show');
});
/*evento de date*/
const form = document.getElementById('turno-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fechaInput = document.getElementById('fecha');
  const fecha = new Date(fechaInput.value);

  const hoy = new Date();

  if (fecha < hoy) {
    alert('La fecha de turno debe ser posterior a la fecha actual.');
  } else {
    form.submit();
  }
});