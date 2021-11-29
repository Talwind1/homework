let btn = document.querySelector("#btn");
let text = document.querySelector("#userInput").value;

btn.addEventListener("click", () => {
  if (text.length < 100) {
    alert("Please tell us more");
  }
});
