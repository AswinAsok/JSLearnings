const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 3);

const myTotal = myNums.reduce((acc, currValue) => {
    return acc + currValue;
}, 0);

console.log(myTotal);
