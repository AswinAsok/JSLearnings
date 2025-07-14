function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Aswin",
                url: "https://github.com/AswinAsok",
            });
        }, 3000);
    });
}

async function getUserData() {
    return await fetchUserData()
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log("Fetched Error", error);
        });
}

const userData = async () => {
    const tempUserData = await getUserData();
    console.log("TempUserData", tempUserData);
};

userData();

// async function getUserData() {
//     try {
//         console.log("Fetching User Data");
//         const userData = await fetchUserData();
//         console.log("User Data", userData);
//         console.log("User Data Fetched Successfully");
//     } catch (error) {
//         console.log("Error Fetching Data", error);
//     }
// }
