//  <button id="toggle-button">
//       <span id="hamburger-icon">🍔</span>
//       <span class="hidden" id="close-icon">❌</span>
//     </button>

//     <nav id="menu" class="hidden">
//       <a href="#">Inicio</a>
//       <a href="#">Productos</a>
//       <a href="#">Contacto</a>
//     </nav>

// CREACION DE NODOS
const toggleButton = document.createElement("button");
const hamburgerIcon = document.createElement("span");
const closeIcon = document.createElement("span");

const menu = document.createElement("nav");
const menuLinks = ["Inicio", "Productos", "Contacto"];
menuLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.href = "#";
  anchor.textContent = link;
  menu.append(anchor);
});

// Agregando clases y contenido
hamburgerIcon.textContent = "🍔";
closeIcon.textContent = "❌";

closeIcon.classList.add("hidden");
menu.classList.add("hidden");

toggleButton.append(hamburgerIcon);
toggleButton.append(closeIcon);

// Agregando funcionalidad
toggleButton.addEventListener("click", function (_event) {
  menu.classList.toggle("hidden");
  menu.classList.toggle("nav");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  if (toggleButton.contains(event.target)) return;
  if (menu.contains(event.target)) return;

  menu.classList.add("hidden");
  menu.classList.remove("nav");
  hamburgerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
});

document.body.append(toggleButton);
document.body.append(menu);
