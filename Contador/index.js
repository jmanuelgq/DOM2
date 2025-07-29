// <div class="counter-container">
//   <p id="counter-value">0</p>
//   <button id="increment">Incrementar</button>
//   <button id="decrement">Decrementar</button>
//   <button id="reset">Resetear</button>
// </div>

class Counter {
  constructor(containerId) {
    this.container = document.querySelector(containerId);
    this.value = 0;
    this.init();
  }

  incrementHandler() {
    // this.counter.innerText = parseInt(this.counter.innerText) + 1;
    this.value += 1;
    this.updateValue();
  }

  decrementHandler() {
    // this.counter.innerText = parseInt(this.counter.innerText) - 1;
    this.value -= 1;
    this.updateValue();
  }

  resetHandler() {
    // this.counter.innerText = "0";
    this.value = 0;
    this.updateValue();
  }

  updateValue() {
    this.counter.textContent = this.value;
  }

  init() {
    this.container.classList.add("counter-container");

    this.counter = document.createElement("p");
    this.incrementButton = document.createElement("button");
    this.decrementButton = document.createElement("button");
    this.resetButton = document.createElement("button");

    this.counter.textContent = this.value;
    this.incrementButton.textContent = "Incrementar";
    this.decrementButton.textContent = "Decrementar";
    this.resetButton.textContent = "Resetear";

    this.container.addEventListener(
      "click",
      function (event) {
        if (this.incrementButton.contains(event.target)) {
          this.incrementHandler();
        } else if (this.decrementButton.contains(event.target)) {
          this.decrementHandler();
        } else if (this.resetButton.contains(event.target)) {
          this.resetHandler();
        }
      }.bind(this)
    );

    this.container.append(this.counter);
    this.container.append(this.incrementButton);
    this.container.append(this.decrementButton);
    this.container.append(this.resetButton);
  }
}

new Counter("#counter-container");
