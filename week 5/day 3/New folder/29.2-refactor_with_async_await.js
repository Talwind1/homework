const page = document.querySelector("#page");
const title = document.createElement("div");
const text = document.createElement("div");
const btn = document.getElementById("btn");
btn.addEventListener("click", joke);

async function joke() {
  try {
    const data = await fetch("https://api.jokes.one/jod");
    const dataJs = await data.json();
    const contents = await dataJs.contents;
    const joke = contents.jokes[0].joke;
    const jokeTitle = joke.title;
    title.innerText = jokeTitle;
    page.appendChild(title);

    const jokeText = joke.text;
    text.innerText = jokeText;
    page.appendChild(text);
  } catch {
    err("something went wrong.");
  }
  btn.innerHTML = "hidden";
}
