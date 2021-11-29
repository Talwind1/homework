let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let age = document.querySelector("#age").value;
  let h2 = document.createElement("h2");
  document.body.appendChild(h2);

  if (age > 18) {
    h2.innerText = "you can drink";
  } else {
    h2.innerText = "you're too young";
  }
});
