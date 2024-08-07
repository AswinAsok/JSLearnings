### Promises and Queues

-   Promises are often followed by an guess and output question, to check whether you know which task goes into which queue.

-   Promises are placeholder that can resolve or reject in future.

-   Promises task in a callback function and will have 3 states which are: pending(default state), resolved and rejected. default value will be undefined.

-   Promise has two major things which are states and result. You can't never direcly access any of the promise states or types to mannually alter them.

-   Whenever we use a callback we get two things/values which are response and rejected. response will go this and rejected will go to catch

```javascript
new Promsise((res, rej) => res("success"));
new Promsise((res, rej) => rej("failure"));

//this is synchronous


getDataFromAPI("url")
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .then( => console.log("Kazhinu"))

//We can chain thens together the output of the first then will be the input for the second then.

```

-   Promise adds asynchornous behaviour to JavaScript(.then and .catch)
