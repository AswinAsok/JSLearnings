function sumOfNumbers(number) {
    if (number == 1) {
        return 1;
    }

    return number + sumOfNumbers(number - 1);
}

console.log(sumOfNumbers(10 ));

