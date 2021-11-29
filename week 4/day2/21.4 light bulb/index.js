const imgEl = document.querySelector(".lamp");
imgEl.addEventListener("click", (e) => {
  e.target.classList.toggle("on");
});
