//Iterative Approach
function firstOcc(array, findMe, currIndex) {
    while (currIndex < array.length) {
        if (array[currIndex] == findMe) {
            return currIndex;
        } else {
            currIndex++;
        }
    }

    return -1;
}

//Recursively
function recursiveFirstOccurance(array, findMe, currIndex) {
    if (array.length == currIndex) {
        return -1;
    }

    if (array[currIndex] == findMe) return currIndex;

    return recursiveFirstOccurance(array, findMe, currIndex + 1);
}

console.log(recursiveFirstOccurance([1, 2, 3], 2, 0));
