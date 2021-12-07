function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    if (arr.find((item) => !isWord(item))) {
      reject("this is not words array");
    } else {
      resolve(arr.map((element) => element.toUpperCase()));
    }
  });
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.find((item) => !isWord(item))) {
      reject("This is not words array");
    } else {
      resolve(arr.sort());
    }
  });
}
function isWord(item) {
  let allChars = typeof item === "string";
  const arr = item.split("");
  for (let i = 0; i < arr.length && allChars; i++) {
    allChars = arr[i].toLowerCase() !== arr[i].toUpperCase();
  }

  return allChars;
}

makeAllCaps(["aRm", "run", "cow"])
  .then((data) => sortWords(data))
  .then((data) => console.log(data))
  .catch((data) => console.log(data));

makeAllCaps(["a", "29", "ca"])
  .then((data) => sortWords(data))
  .then((data) => console.log(data))
  .catch((data) => console.log(data));
