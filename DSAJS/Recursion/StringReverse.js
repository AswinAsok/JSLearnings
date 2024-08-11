//Reverse a String

//Iterative Approach

// Hello

function reverseString(string) {
    let reverse = "";
    let length = string.length - 1;

    while (length >= 0) {
        reverse += string[length--];
    }

    return reverse;
}

console.log(reverseString("Hello"));

function recursiveReverseString(string) {
    if (string === "") {
        return string;
    }

    return (
        string[string.length - 1] + recursiveReverseString(string.substring(0, string.length - 1))
    );
}

console.log(recursiveReverseString("Hello"));
