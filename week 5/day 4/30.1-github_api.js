const btn = document.getElementById("btn");
btn.addEventListener("click", getUrl);
const imgContainer = document.getElementById("img-container");
const container = document.getElementById("container");
// const data = [];

async function getUrl() {
  const username = document.getElementById("userInput").value;
  try {
    const userUrl = await fetch(`https://api.github.com/users/${username}`);

    const userUrlJs = await userUrl.json();
    createCard(userUrlJs);
    console.log(userUrlJs);
  } catch (error) {
    console.log(error);
  }
}

function createCard(data) {
  avatarUrl = data.avatar_url;
  let img = document.createElement("img");
  img.src = avatarUrl;
  imgContainer.appendChild(img);
  let title = document.createElement("h2");
  console.log(data.login);
  title.innerText = data.login;
  container.appendChild(title);
}
