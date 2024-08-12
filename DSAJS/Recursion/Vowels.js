function isVowel(character) {
    return "aeiou".indexOf(character.toLowerCase()) !== -1;
}

function countVowels(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        isVowel(string[i]) && count++;
    }

    return count;
}

console.log(countVowels("Hello"));

function recursiveCountVowels(string, stringLength) {
    if (stringLength == 1) {
        return Number(isVowel(string[0]));
    }

    return recursiveCountVowels(string, stringLength - 1) + isVowel(string[stringLength - 1]);
}

let myString = "Hello";
console.log(recursiveCountVowels(myString, myString.length));
