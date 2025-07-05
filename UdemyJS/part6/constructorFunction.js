function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Camry");
let myNewCar = new Car("Maruthi", "Alto");
// console.log(myCar);
// console.log(myNewCar);

function Tea(type) {
    this.type = type;
    this.description = () => {
        return `this is a cup of ${this.type}`;
    };
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea);
console.log(lemonTea.description());

function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function () {
    return `${this.species} make a sound`;
};

let dog = new Animal("Dog");
console.log(dog);
console.log(dog.sound());
