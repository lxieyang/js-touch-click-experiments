const clearButton = document.querySelector("#clear-button");
const target = document.querySelector("#target");
const workarea = document.querySelector("#workarea");
const targetEventsDisplay = document.querySelector("#target-events-display");
const workareaEventsDisplay = document.querySelector(
  "#workarea-events-display"
);

let showMouseMove = true;
let showTouchMove = true;

let mousemoveToggleButton = document.querySelector("#mousemove-toggle-button");
let touchmoveToggleButton = document.querySelector("#touchmove-toggle-button");

mousemoveToggleButton.addEventListener("click", (event) => {
  if (showMouseMove) {
    showMouseMove = false;
    mousemoveToggleButton.innerText = "Hiding mousemove events";
  } else {
    showMouseMove = true;
    mousemoveToggleButton.innerText = "Showing mousemove events";
  }
});

touchmoveToggleButton.addEventListener("click", (event) => {
  if (showTouchMove) {
    showTouchMove = false;
    touchmoveToggleButton.innerText = "Hiding touchmove events";
  } else {
    showTouchMove = true;
    touchmoveToggleButton.innerText = "Showing touchmove events";
  }
});

// clear button logic:
clearButton.addEventListener(
  "click",
  (event) => {
    targetEventsDisplay.innerHTML = "";
    workareaEventsDisplay.innerHTML = "";
  },
  false
);

target.addEventListener("click", () => printOutEvent("click"), false);
target.addEventListener("dblclick", () => printOutEvent("dbclick"), false);
target.addEventListener("mousedown", () => printOutEvent("mousedown"), false);
target.addEventListener("mousemove", () => printOutEvent("mousemove"), false);
target.addEventListener("mouseup", () => printOutEvent("mouseup"), false);
target.addEventListener(
  "touchstart",
  (e) => printOutEvent("touchstart (" + e.touches.length + ")", "target"),
  false
);
target.addEventListener(
  "touchmove",
  (e) => printOutEvent("touchmove (" + e.touches.length + ")", "target"),
  false
);
target.addEventListener(
  "touchend",
  (e) => printOutEvent("touchend (" + e.touches.length + ")", "target"),
  false
);

workarea.addEventListener(
  "click",
  () => printOutEvent("click", "workarea"),
  false
);
workarea.addEventListener(
  "dblclick",
  () => printOutEvent("dbclick", "workarea"),
  false
);
workarea.addEventListener(
  "mousedown",
  () => printOutEvent("mousedown", "workarea"),
  false
);
workarea.addEventListener(
  "mousemove",
  () => printOutEvent("mousemove", "workarea"),
  false
);
workarea.addEventListener(
  "mouseup",
  () => printOutEvent("mouseup", "workarea"),
  false
);
workarea.addEventListener(
  "touchstart",
  (e) => printOutEvent("touchstart (" + e.touches.length + ")", "workarea"),
  false
);
workarea.addEventListener(
  "touchmove",
  (e) => printOutEvent("touchmove (" + e.touches.length + ")", "workarea"),
  false
);
workarea.addEventListener(
  "touchend",
  (e) => printOutEvent("touchend (" + e.touches.length + ")", "workarea"),
  false
);

const printOutEvent = (eventName, eventTarget = "target") => {
  if (!showMouseMove && eventName.includes("mousemove")) return;

  if (!showTouchMove && eventName.includes("touchmove")) return;

  let item = document.createElement("DIV");
  item.classList.add("item");
  item.innerText =
    new Date().getTime().toString().substring(7) + " - " + eventName;
  if (eventTarget === "target") {
    targetEventsDisplay.prepend(item);
  } else if (eventTarget === "workarea") {
    workareaEventsDisplay.prepend(item);
  }
};
