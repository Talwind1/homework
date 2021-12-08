const page = document.querySelector(".page");
const btn = document.getElementById("search");

function getRes() {
  let title = document.getElementById("titleInput").value;

  fetch(`http://www.omdbapi.com/?apikey=b84975dd&t=${title}`, {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.Response === "False") {
        throw Error("not Valid!!!");
      }
      console.log(data);
      const movieObj = {
        title: data.Title,
        poster: data.Poster,
        genre: data.Genre,
        year: data.Year,
        plot: data.Plot,
        director: data.Director,
        actors: data.Actors,
        rating: data.Rating,
      };
      createCard(movieObj);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createCard(data) {
  const container = document.querySelector(".container");
  page.appendChild(container);
  const containerImg = document.createElement("div");
  const details = document.createElement("div");
  container.setAttribute("class", "container");
  containerImg.setAttribute("class", "containerImg");

  const imgEl = document.createElement("img");
  imgEl.src = data.poster;
  containerImg.appendChild(imgEl);
  container.appendChild(containerImg);

  container.appendChild(details);
  const title = document.createElement("h1");
  title.innerText = `${data.title}`;
  details.appendChild(title);

  const genre = document.createElement("h2");
  genre.innerText = `genre: ${data.genre}`;
  details.appendChild(genre);

  const year = document.createElement("h2");
  year.innerText = `Year: ${data.year}`;
  details.appendChild(year);

  const plot = document.createElement("h2");
  plot.innerText = `Plot: ${data.plot}`;
  details.appendChild(plot);

  const director = document.createElement("h2");
  director.innerText = `Director: ${data.director}`;
  details.appendChild(director);

  const actors = document.createElement("h2");
  actors.innerText = `Actors: ${data.actors}`;
  details.appendChild(actors);
}

btn.addEventListener("click", getRes);
