// let sum = 0;
// let i = 1;

// while (i <= 5) {
//     sum += i++;
// }

// console.log(sum);

// let countdown = [];
// let i = 5;
// while (i > 0) {
//     countdown.push(i--);
// }

// console.log(countdown);

let teaCollection = [];
let tea;

do {
    tea = prompt(`Enter your favorite tea(type "stop" to finish)`);

    if (tea !== "stop") {
        teaCollection.push(tea);
    }
} while (tea !== "stop");
