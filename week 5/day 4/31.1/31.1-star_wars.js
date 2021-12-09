const page = document.querySelector("#page");
async function starWars() {
  const url = await fetch("https://swapi.dev/api/films/1/");
  if (!url.ok) {
    throw Error("something went wrong");
  }
  const data = await url.json();
  // console.log(data.characters);
  createArr(data.characters);
}

async function createArr(data) {
  let charactersArr = [];
  let i = 0;
  while (i < 10) {
    const character = await fetch(data[i]);
    if (character.ok) {
      const characterJs = await character.json();
      let characterI = {
        name: characterJs.name,
        heigth: characterJs.heigth,
        hair: characterJs.hair_color,
      };
      try {
        const homeWorld = await fetch(characterJs.homeworld);
        if (homeWorld.ok) {
          const world = await homeWorld.json();
          characterI["planet name"] = world.name;
          characterI["planet population"] = world.population;
        }
      } catch (e) {
        throw Error();
      }
      charactersArr.push(characterI);
      i++;
    }
  }
  console.log(charactersArr);

  addToTable(charactersArr);
}

function addToTable(arr) {
  const table = createTable();
  for (i of arr) {
    const row = document.createElement("tr");
    Object.values(i).forEach((j) => {
      const td = document.createElement("td");
      td.innerText = j;
      row.appendChild(td);
    });
    table.appendChild(row);
  }
}

function createTable() {
  const table = document.createElement("table");
  page.appendChild(table);
  const rowHead = document.createElement("tr");

  const name = document.createElement("th");
  name.innerText = "Name";
  rowHead.appendChild(name);

  const heigth = document.createElement("th");
  heigth.innerText = "Height";
  rowHead.appendChild(heigth);

  const hair = document.createElement("th");
  hair.innerText = "Hair";
  rowHead.appendChild(hair);

  const planet = document.createElement("th");
  planet.innerText = "planet";
  rowHead.appendChild(planet);

  const population = document.createElement("th");
  population.innerText = "Population";
  rowHead.appendChild(population);

  table.appendChild(rowHead);

  return table;
} // console.log(caractersArr);

starWars();
