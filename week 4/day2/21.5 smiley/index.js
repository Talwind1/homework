let submit = document.querySelector(".submit");
let num = document.getElementsByName("smilies").value;
num = parseInt(num);

let container = document.querySelector(".container");

submit.addEventListener("click", () => {
  console.log(typeof num);
  if (Number.isInteger(num)) {
    for (let i = 0; i < num; i++) {
      let img = document.createElement("img");
      img.src = "/img/smiley-6323863_960_720.png";
      document.body.appendChild(img);
      container.appendChild(img);
    }
  } else {
    alert("Enter a valid number please");
  }
});
