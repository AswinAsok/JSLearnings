function gcd(num1, num2) {
    if (num2 === 0) {
        return num1;
    }
    
    return gcd(num2, num1 % num2);
}

const gcdResult = gcd(90, 10);

console.log(gcdResult);