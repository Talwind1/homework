// 1. Use a constructor function to implement a Car. A car has a make(brand) and a speed property. The speed property is the current speed of the car in km/h.
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

function Car(speed, brand) {
  this.speed = speed;
  this.brand = brand;
}

const car1 = new Car(120, "BMW");
const car2 = new Car(95, "Mercedes");

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();

class Car {
  constructor(speed, brand) {
    this.speed = speed;
    this.brand = brand;
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(this.speed);
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }

  getSpeed() {
    return this.speed;
  }
  setSpeed(speed) {
    this.speed = speed;
  }
}
