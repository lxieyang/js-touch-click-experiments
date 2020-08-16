const clearButton = document.querySelector("#clear-button");
const singleClickDisplay = document.querySelector("#single-click-display");
const doubleClickDisplay = document.querySelector("#double-click-display");
const touchStartDisplay = document.querySelector("#touch-start-display");

// clear button logic:
clearButton.addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
    const defaultValue = "nothing happened yet";
    singleClickDisplay.textContent = defaultValue;
    doubleClickDisplay.textContent = defaultValue;
    touchStartDisplay.textContent = defaultValue;
  },
  false
);

const singleClickHandler = (event) => {
  console.log("single");
  singleClickDisplay.textContent =
    "single click at (" + event.clientX + ", " + event.clientY + ")";
};

const doubleClickHandler = (event) => {
  console.log("double");
  doubleClickDisplay.textContent =
    "double click at (" + event.clientX + ", " + event.clientY + ")";
};

const touchStartHandler = (event) => {
  const numFingers = event.touches.length;
  touchStartDisplay.textContent = "touch start with " + numFingers + " fingers";
};

document.body.addEventListener("click", singleClickHandler, false);
document.body.addEventListener("dblclick", doubleClickHandler, false);
document.body.addEventListener("touchstart", touchStartHandler, false);
