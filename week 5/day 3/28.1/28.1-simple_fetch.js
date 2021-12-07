const url = "https://api.jokes.one/jod";
const page = document.getElementById("page");
const title = document.getElementById("title");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", letsJoke);
function letsJoke() {
  fetch("https://api.jokes.one/jod")
    .then((data) => data.json())
    .then((data) => {
      let joke = data.contents.jokes[0].joke;
      title.innerText = `${joke.title}`;
      page.appendChild(title);
      text.innerText = ` ${joke.text}`;
      page.appendChild(text);
    });
}
