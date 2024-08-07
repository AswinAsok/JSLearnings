### What is Hoisting and Temporal Dead Zone.

-   Don't tell that hoisting is like putting variables and functions to the top of the file.

-   The JS Engine prepares the memory > Memory Preparation Phase. The code gets scanned in a squential manner and

    1. Function's Reference are stored
    2. let and const are set to uninitalized
    3. var is set to undefined in the memory

-   Case 1: Functions can be accessed before the declaration because of hoisting cause the function's memory ref is already in memory while execution phase

-   Case 2: var variables can also be accessed before declaration but they will return undefined

-   Case 3: let and cost can't be accessed before declaration cause they set to undefined.

-   Temporal Deadzone is the zone before the actual declaration of a varible.
