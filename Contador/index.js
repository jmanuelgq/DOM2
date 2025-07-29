const divContainer = document.querySelector(".counter-container");

const counterValue = document.querySelector("#counter-value");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const resetButton = document.querySelector("#reset");

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

// incrementButton.addEventListener("click", () => {
//   counterValue.innerText = parseInt(counterValue.innerText) + 1;
// });

// decrementButton.addEventListener("click", () => {
//   counterValue.innerText = parseInt(counterValue.innerText) - 1;
// });

// resetButton.addEventListener("click", () => {
//   counterValue.innerText = "0";
// });
