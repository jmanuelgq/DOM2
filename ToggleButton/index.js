// <button id="toggle-button">
//   <span id="hamburger-icon">🍔</span>
//   <span id="close-icon" class="hidden">❌</span>
// </button>
// <nav id="menu" class="hidden">
//   <a href="">Inicio</a>
//   <a href="">Productos</a>
//   <a href="">Contacto</a>
// </nav>

class ToggleMenu {
  constructor(containerId) {
    this.container = document.querySelector(containerId);
    this.menuState = false;
    this.init();
  }

  toggleMenu() {
    this.menuState = !this.menuState;
    this.menu.classList.toggle("hidden");
    this.menu.classList.toggle("nav");
    // this.hamburgerIcon.classList.toggle("hidden");
    // this.closeIcon.classList.toggle("hidden");
    this.toggleButton.textContent = this.menuState ? "❌" : "🍔";
  }

  init() {
    this.toggleButton = document.createElement("button");
    this.toggleButton.textContent = "🍔";
    // this.hamburgerIcon = document.createElement("span");
    // this.closeIcon = document.createElement("span");

    this.menu = document.createElement("nav");
    const menuLinks = ["Inicio", "Productos", "Contacto"];
    menuLinks.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = "#";
      anchor.textContent = link;
      this.menu.append(anchor);
    });

    // this.hamburgerIcon.textContent = "🍔";
    // this.closeIcon.textContent = "❌";

    // this.closeIcon.classList.add("hidden");
    this.menu.classList.add("hidden");

    // this.toggleButton.append(this.hamburgerIcon);
    // this.toggleButton.append(this.closeIcon);

    // this.toggleButton.addEventListener("click", this.toggleMenu.bind(this));
    this.toggleButton.addEventListener("click", () => this.toggleMenu());

    this.container.append(this.toggleButton);
    this.container.append(this.menu);
  }
}

new ToggleMenu("#menu-container");
