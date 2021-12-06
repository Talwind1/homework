const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
whoIsStronger(hero.getStrength);

//problem in the code is that in the if statement, getStrength() envoke
//without any relevant owner. (whoIsStronger doesn't have the getStrength() method.)
//fix it with 'call' word:
whoIsStronger(hero.getStrength.bind(hero));
