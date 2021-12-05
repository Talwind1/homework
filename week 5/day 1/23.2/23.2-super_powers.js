const storm = {
  superPower: "flying",

  printSuperPower: printSuperPower,
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.printSuperPower();
