function power(value, exponent) {
    if (exponent <= 0) return 1;

    return value * power(value, exponent - 1);
}

console.log(power(2, 4));
