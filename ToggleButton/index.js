// <button id="toggle-button">
//   <span id="hamburger-icon">🍔</span>
//   <span id="close-icon" class="hidden">❌</span>
// </button>
// <nav id="menu" class="hidden">
//   <a href="">Inicio</a>
//   <a href="">Productos</a>
//   <a href="">Contacto</a>
// </nav>

function createToggleMenu(containerId) {
  const container = document.querySelector(containerId);
  let menuState = false;

  const toggleButton = document.createElement("button");
  toggleButton.textContent = "🍔";

  const menu = document.createElement("nav");
  const menuLinks = ["Inicio", "Productos", "Contacto"];
  menuLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.textContent = link;
    menu.append(anchor);
  });

  menu.classList.add("hidden");

  function toggleMenu() {
    menuState = !menuState;
    menu.classList.toggle("hidden");
    menu.classList.toggle("nav");
    toggleButton.textContent = menuState ? "❌" : "🍔";
  }

  toggleButton.addEventListener("click", toggleMenu);
  container.append(toggleButton);
  container.append(menu);
}

const toggleMenu = createToggleMenu("#menu-container");
