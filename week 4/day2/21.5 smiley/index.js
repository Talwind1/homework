let submit = document.querySelector(".submit");
let num = document.getElementsByName("smilies").values;

submit.addEventListener("click", () => {
  if (!Number.isInteger(num)) {
    alert("Enter a valid number please");
  }
  for (let i = 0; i < num; i++) {
    let img = document.createElement("img");
    img.src = "/.";
  }
});
