function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let piqachu = new Pokemon("Piqachu", "yellow", ["attack", "lead", "sing"]);
let abra = new Pokemon("Abra", "yellow", ["sleep"]);
let kadabra = new Pokemon("Kadabra", "yellow", ["cook"]);

Pokemon.prototype.isSquare = function () {
  return ((this.a == this.b) == this.c) == this.d;
};

Pokemon.prototype.callPokemon = function () {
  console.log(`I coose you, ${this.name}`);
};

Pokemon.prototype.attack = function (num) {
  console.log(`${this.name}  used ${this.attackList[num - 1]}`);
};

piqachu.callPokemon();
piqachu.attack(1);
abra.callPokemon();
abra.attack(1);
kadabra.callPokemon();
kadabra.attack(1);
