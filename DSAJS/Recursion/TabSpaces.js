//Remove all the tabs and spaces from a string.
//This includes both \t and ""

function removeTabsAndSpaces(input) {
    let result = "";

    for (let index = 0; index < input.length; index++) {
        let character = input[index];

        if (character !== "\t" && character !== " ") {
            result += character;
        }
    }

    return result;
}

console.log(removeTabsAndSpaces("Hello World"));

function recursiveRemoveTabsAndSpaces(input) {
    if (input.length === 0) return "";

    const firstChar = input[0];
    const restOfString = input.slice(1);

    if (firstChar === " " || firstChar === "\t") return recursiveRemoveTabsAndSpaces(restOfString);
    else {
        return firstChar + recursiveRemoveTabsAndSpaces(restOfString);
    }
}

console.log(recursiveRemoveTabsAndSpaces("Hello World"));
