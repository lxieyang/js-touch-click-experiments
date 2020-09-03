const clearButton = document.querySelector("#clear-button");
const target = document.querySelector("#target");
const workarea = document.querySelector("#workarea");
const targetEventsDisplay = document.querySelector("#target-events-display");
const workareaEventsDisplay = document.querySelector(
  "#workarea-events-display"
);

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
target.addEventListener("touchstart", () => printOutEvent("touchstart"), false);
target.addEventListener("touchmove", () => printOutEvent("touchmove"), false);
target.addEventListener("touchend", () => printOutEvent("touchend"), false);

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
  () => printOutEvent("touchstart", "workarea"),
  false
);
workarea.addEventListener(
  "touchmove",
  () => printOutEvent("touchmove", "workarea"),
  false
);
workarea.addEventListener(
  "touchend",
  () => printOutEvent("touchend", "workarea"),
  false
);

const printOutEvent = (eventName, eventTarget = "target") => {
  let item = document.createElement("DIV");
  item.classList.add("item");
  item.innerText = new Date().getTime() + " - " + eventName;
  if (eventTarget === "target") {
    targetEventsDisplay.prepend(item);
  } else if (eventTarget === "workarea") {
    workareaEventsDisplay.prepend(item);
  }
};
