const nav = document.querySelector('.nav');

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    // El usuario está haciendo scroll hacia abajo
    nav.style.top = '-50px'; // Ocultar el navbar
  } else {
    // El usuario está haciendo scroll hacia arriba
    nav.style.top = '0'; // Mostrar el navbar
  }

  prevScrollPos = currentScrollPos;
});
