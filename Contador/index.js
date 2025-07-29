// <div class="counter-container">
//   <p id="counter-value">0</p>
//   <button id="increment">Incrementar</button>
//   <button id="decrement">Decrementar</button>
//   <button id="reset">Resetear</button>
// </div>

// const divContainer = document.querySelector(".counter-container");

// const counterValue = document.querySelector("#counter-value");
// const incrementButton = document.querySelector("#increment");
// const decrementButton = document.querySelector("#decrement");
// const resetButton = document.querySelector("#reset");

//Creación de nodos
const divContainer = document.createElement("div");
const counterValue = document.createElement("p");
const incrementButton = document.createElement("button");
const decrementButton = document.createElement("button");
const resetButton = document.createElement("button");

//Agregando clases y contenido
counterValue.textContent = "0";
incrementButton.textContent = "Incrementar";
decrementButton.textContent = "Decrementar";
resetButton.textContent = "Resetear";

divContainer.classList.add("counter-container");

divContainer.append(counterValue);
divContainer.append(incrementButton);
divContainer.append(decrementButton);
divContainer.append(resetButton);

//Agregando funcionalidad
function incrementHandler() {
  counterValue.innerText = parseInt(counterValue.innerText) + 1;
}

function decrementHandler() {
  counterValue.innerText = parseInt(counterValue.innerText) - 1;
}

divContainer.addEventListener("click", function (event) {
  if (incrementButton.contains(event.target)) {
    incrementHandler();
  } else if (decrementButton.contains(event.target)) {
    decrementHandler();
  } else if (resetButton.contains(event.target)) {
    counterValue.innerText = 0;
  }
});

document.body.append(divContainer);

// incrementButton.addEventListener("click", () => {
//   counterValue.innerText = parseInt(counterValue.innerText) + 1;
// });

// decrementButton.addEventListener("click", () => {
//   counterValue.innerText = parseInt(counterValue.innerText) - 1;
// });

// resetButton.addEventListener("click", () => {
//   counterValue.innerText = "0";
// });
