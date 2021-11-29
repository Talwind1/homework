let off = document.querySelector("#off");
let on = document.querySelector("#on");

off.addEventListener("click", () => {
  off.setAttribute("hidden", "hidden");
  on.removeAttribute("hidden");
});
on.addEventListener("click", () => {
  on.setAttribute("hidden", "hidden");
  off.removeAttribute("hidden");
});
