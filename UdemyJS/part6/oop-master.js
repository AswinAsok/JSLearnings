// let Veh = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     start: function () {
//         return `${this.make} car got started in ${this.year}`;
//     },
// };

// // console.log(car.start());

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let john = new Person("John", 20);

// console.log(john);

// function Animal(type) {
//     this.type = type;
// }

// Animal.prototype.speak = function () {
//     return `${this.type} makes a sound`;
// };

// Array.prototype.hitesh = function () {
//     return `Custom method ${this}`;
// };

// let myArray = [1, 2, 3];

// console.log(myArray.hitesh());

// class Vehicle {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     start() {
//         return `${this.make} is a car from ${this.make}`;
//     }
// }

// class Car extends Vehicle {
//     drive() {
//         return `${this.make}: This is an inheritance example`;
//     }
// }

// let myCar = new Car("Maruthi", "Suzuki");
// console.log(myCar.drive());

//Encapsulation
//way to restrict direct access to data methods

// class BankAccount {
//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//         return this.#balance;
//     }

//     getBalance() {
//         return `Rs. ${this.#balance}`;
//     }
// }

// let account = new BankAccount();
// console.log(account.getBalance());

// // Abstraction

// class CoffeeMachine {
//     start() {
//         // call DB
//         // filter value
//         return `starting the machine ....`;
//     }

//     brewCoffee() {
//         return `Brewing Coffee`;
//     }
// }

// let myMachine = new CoffeeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// class Bird {
//     fly() {
//         return `Flying...`;
//     }
// }

// class Penguin extends Bird {
//     fly() {
//         return `Penguins can't fly`;
//     }
// }

// let bird = new Bird();
// let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

let miniCalc = new Calculator();
console.log(Calculator.add(2, 4));

//Getters and Setters

class Employee {
    #salary;
    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return `You aren't allowed to see the salary`;
    }

    set salary(value) {
        if (value < 0) {
            console.error("Eda ath onnum pattella");
        } else {
            this._salary = value;
        }
    }
}

let employee = new Employee("Alice", -50000);
console.log(employee.salary);
