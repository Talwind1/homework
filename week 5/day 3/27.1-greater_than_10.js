function numProm(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} greater than ten`);
    } else {
      reject("less than ten");
    }
  });
}

numProm(3)
  .then((data) => console.log(data))
  .catch((data) => console.log(data));
