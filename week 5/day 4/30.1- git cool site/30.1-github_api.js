const btn = document.getElementById("btn");
btn.addEventListener("click", getUrl);
btn.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getUrl();
  }
});
const page = document.getElementById("page");

async function getUrl() {
  const username = document.getElementById("userInput").value;
  try {
    const userUrl = await fetch(`https://api.github.com/users/${username}`);
    const valid = userUrl.ok;
    const userUrlJs = await userUrl.json();

    if (valid) createCard(userUrlJs);
  } catch (error) {
    console.log(error);
  }
}
const users = [];
function createCard(data) {
  let user = data.login;
  if (!users.includes(user)) {
    users.push(user);
    const container = document.createElement("div");
    container.classList.add("container");
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    container.appendChild(imgContainer);
    page.appendChild(container);
    avatarUrl = data.avatar_url;
    const img = document.createElement("img");
    img.src = avatarUrl;
    imgContainer.appendChild(img);
    const title = document.createElement("a");
    title.href = data.html_url;
    title.innerText = data.login;
    container.appendChild(title);
    const details = document.createElement("h3");
    details.classList.add("title");
    details.innerText = `posts ${data.public_repos} repositories`;
    container.appendChild(details);
  }
}
