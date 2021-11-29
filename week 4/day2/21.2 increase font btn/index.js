let more = document.querySelector("#more");

let less = document.querySelector("#less");
let h2 = document.querySelector("h2");
let compStyles = getComputedStyle(h2);

more.addEventListener("click", () => {
  let size = compStyles.getPropertyValue("font-size");
  size = parseInt(size) + 5;
  if (size <= 95) {
    size = size + 5;
    h2.style.fontSize = size.toString() + "px";
  }
});

less.addEventListener("click", () => {
  let size = compStyles.getPropertyValue("font-size");
  size = parseInt(size);
  if (size >= 21) {
    size = size - 5;
    h2.style.fontSize = size.toString() + "px";
  }
});
