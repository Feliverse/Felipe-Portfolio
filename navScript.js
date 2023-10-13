const nav = document.querySelector('.nav');

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    // El usuario está haciendo scroll hacia abajo
    nav.style.top = '-150px'; // Ocultar el navbar
  } else {
    // El usuario está haciendo scroll hacia arriba
    nav.style.top = '0'; // Mostrar el navbar
  }

  prevScrollPos = currentScrollPos;
});

document.addEventListener("DOMContentLoaded", function () {
  const navCheck = document.getElementById("nav-check");
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 600) {
        navCheck.checked = false;
      }
    });
  });
});

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const navCheck = document.getElementById("nav-check");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navBtn = document.querySelector(".nav-btn label");

    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 600) {
          navCheck.checked = false;
          // Add a class to style the hamburger icon when the nav menu is open
          navBtn.classList.remove("active");
        }
      });
    });
  });
</script>