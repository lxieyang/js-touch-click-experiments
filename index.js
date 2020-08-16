const display = document.querySelector("#display");

const singleClickHandler = (event) => {
  console.log("single");
  display.textContent =
    "single click at (" + event.clientX + ", " + event.clientY + ")";
};

const doubleClickHandler = (event) => {
  console.log("double");
  display.textContent =
    "double click at (" + event.clientX + ", " + event.clientY + ")";
};

const touchStartHandler = (event) => {
  const numFingers = event.touches.length;
  display.textContent = "touch start with " + numFingers + " fingers";
};

document.body.addEventListener("click", singleClickHandler, false);
document.body.addEventListener("dblclick", doubleClickHandler, false);
document.body.addEventListener("touchstart", touchStartHandler, false);
