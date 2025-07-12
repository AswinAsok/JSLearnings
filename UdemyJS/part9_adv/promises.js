function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if (success) {
                resolve("Data Fetched Successfully");
            } else {
                reject("Data Fetching Failed");
            }
        }, 3000);
    });
}

// Consuming the Promise

// let resposne = fetchData();
// console.log(Response);

fetchData()
    .then((data) => {
        console.log(data);
        return "aswin";
    })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
