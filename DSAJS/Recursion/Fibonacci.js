// Iterative Apporach

// function fibonacci(value) {
//     let n0 = 0;
//     let n1 = 1;

//     for (let i = 0; i < value; i++) {
//         let temp = n0 + n1;
//         n0 = n1;
//         c;
//         n1 = temp;
//     }
//     return n0;
// }

// console.log(fibonacci(6));

//recursive

function recursiveFibnacci(value) {
    if (value <= 1) return value;

    return recursiveFibnacci(value - 1) + recursiveFibnacci(value - 2);
}

console.log(recursiveFibnacci(6));
