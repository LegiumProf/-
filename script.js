'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const vadim = new Person('Vadim', 2004);

// console.log(vadim);
// // Prototypes
// console.log(Person.prototype);
// // console.log(Object.getOwnPropertyNames(Person.prototype));

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// vadim.calcAge();
// console.log(vadim);
// console.log(Object.getOwnPropertyNames(Person.prototype));

/////////////////////////////
// Challenge 1

// const Car = function (model, speed) {
//   this.model = model;
//   this.speed = speed;
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// console.log(BMW);

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };
// Car.prototype.break = function () {
//   console.log((this.speed -= 5));
// };

// BMW.accelerate();
// BMW.break();
// BMW.accelerate();
// BMW.break();

// Mercedes.accelerate();
// Mercedes.break();

// function Person(name) {
//   this.name = name;
// }

// const person = new Person('Vadim');
// console.log(person); // покажет объект без метода `sayHello`
// console.log(person.__proto__);

// console.log(person); // покажет объект с методом `sayHello`
// console.log(person.__proto__);

// person.sayHello(); // ошибка: person.sayHello is not a function

// const account = {
//   owner: 'Vadim',
//   movements: [100, 50, 30],

//   get latest() {
//     return this.movements.slice(-1);
//   },
// };

// console.log(account.latest);

//////////////////
// Challenge 2

class CarCl {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }
  accelerate() {
    console.log((this.speed += 10));
  }
  break() {
    console.log((this.speed -= 5));
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

//////////////////
// Challenge 3

const Car = function (model, speed) {
  this.model = model;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};
Car.prototype.break = function () {
  return (this.speed -= 10);
};

const BMW = new Car('BMW', 110);
console.log(BMW);

const CarEV = function (model, speed, charge) {
  Car.call(this, model, speed);
  this.charge = charge;
};
CarEV.prototype = Object.create(Car.prototype);
CarEV.prototype.ChargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};
CarEV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.model} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

CarEV.prototype.constructor = Car;

const Tesla = new CarEV('Tesla', 120, 23);
console.log(Tesla);
Tesla.accelerate();
console.log(Tesla);

// console.log(BMW.speedUS);
// BMW.speedUS = 100;
// console.log(BMW);
// console.log(BMW.speedUS);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   Person.prototype.calcAge = function () {
//     console.log(2037 - birthYear);
//   };
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`Hello ${this.firstName} i'm student of ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// const Nikola = new Person('Nikola', 1873);
// console.log(Nikola.__proto__);

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
