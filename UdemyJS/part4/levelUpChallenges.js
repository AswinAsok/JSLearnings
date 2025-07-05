// let tea = ["greentea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];

// for (let i = 0; i < tea.length; i++) {
//     if (tea[i] === "chai") break;

//     selectedTeas.push(tea[i]);
// }

// console.log(selectedTeas);

// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = [];

// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === "Paris") continue;

//     visitedCities.push(cities[i]);
// }

// console.log(visitedCities);

// let numbers = [1, 2, 3, 4, 5];
// let smallNumbers = [];

// for (const number of numbers) {
//     if (number === 4) {
//         break;
//     }
//     smallNumbers.push(number);
// }

// console.log(smallNumbers);

// let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
// let preferredTeas = [];

// for (const tea of teaTypes) {
//     if (tea === "herbal tea") continue;

//     preferredTeas.push(tea);
// }

// console.log(preferredTeas);

// let citiesPopulation = {
//     London: 455689,
//     "New York": 78945,
//     Paris: 78945,
//     Berlin: 78488,
// };

// let cityNewPopulations = {};
// // console.log(Object.values(citiesPopulation));

// for (const city in citiesPopulation) {
//     if (city === "Berlin") break;
//     cityNewPopulations[city] = citiesPopulation[city];
// }

// console.log(cityNewPopulations);

// let worldCities = {
//     Sydney: 5000000,
//     Tokyo: 9000000,
//     Berlin: 3500000,
//     Paris: 2200000,
// };

// let largeCities = {};

// for (const city in worldCities) {
//     if (worldCities[city] < 2200005) {
//         continue;
//     }
//     largeCities[city] = worldCities[city];
// }

// console.log(largeCities);

// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];

// let availableTeas = [];

// // teaCollection.forEach((tea) => {
// //     console.log(tea);
// // });

// teaCollection.forEach(function (tea) {
//     if (tea === "chai") {
//         return;
//     }

//     availableTeas.push(tea);
// });

// console.log(availableTeas);

// let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let traveledCities = [];

// worldCities.forEach((city) => {
//     if (city === "Sydney") return;

//     traveledCities.push(city);
// });

// console.log(traveledCities);

// let numbers = [2, 5, 7, 9];
// let doubledNumbers = [];
// numbers.forEach((number) => {
//     if (number == 7) return;

//     doubledNumbers.push(number * 2);
// });

// console.log(doubledNumbers);
