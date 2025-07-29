// <div class="counter-container">
//   <p id="counter-value">0</p>
//   <button id="increment">Incrementar</button>
//   <button id="decrement">Decrementar</button>
//   <button id="reset">Resetear</button>
// </div>

function createCounter(containerId) {
  const container = document.querySelector(containerId);
  container.classList.add("counter-container");

  let value = 0;

  const counter = document.createElement("p");
  const incrementButton = document.createElement("button");
  const decrementButton = document.createElement("button");
  const resetButton = document.createElement("button");

  counter.textContent = value;
  incrementButton.textContent = "Incrementar";
  decrementButton.textContent = "Decrementar";
  resetButton.textContent = "Resetear";

  function incrementHandler() {
    value += 1;
    updateValue();
  }

  function decrementHandler() {
    value -= 1;
    updateValue();
  }

  function resetHandler() {
    value = 0;
    updateValue();
  }

  function updateValue() {
    counter.textContent = value;
  }

  container.addEventListener("click", function (event) {
    if (incrementButton.contains(event.target)) {
      incrementHandler();
    } else if (decrementButton.contains(event.target)) {
      decrementHandler();
    } else if (resetButton.contains(event.target)) {
      resetHandler();
    }
  });

  container.append(counter);
  container.append(incrementButton);
  container.append(decrementButton);
  container.append(resetButton);

  return {
    increment: function () {
      incrementHandler.click();
    },
    decrement: function () {
      decrementHandler.click();
    },
    reset: function () {
      resetButton.click();
    },
  };
}

const counter = createCounter("#counter-container");
