// // Creation
// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     // DB Calls, cryptography, network calls

//     setTimeout(() => {
//         console.log("Async Task is Complete");
//         resolve();
//     }, 1000);
// });

// promiseOne.then(() => {
//     console.log("Promise Consumed");
// });

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async Task 2");
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log("Async 2 Resolved");
// });

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             userName: "Chai",
//             email: "chai@chaiaurcode.como",
//         });
//     }, 1000);
// });

// promiseThree.then((user) => {
//     console.log(user);
// });

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;

        if (!error) {
            resolve({
                username: "Aswin",
                password: "123123123",
            });
        } else {
            reject("Adich poi mowne");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    });

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;

        if (!error) {
            resolve({
                username: "JavaScript",
                password: "123123123",
            });
        } else {
            reject("JS Went Wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    const response = await promiseFive;
    console.log(response);
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://randomuser.me/api/");

//         const data = await response.json();

//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch("https://randomuser.me/api/")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
