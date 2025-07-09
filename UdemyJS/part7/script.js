// console.log("Hello from script");

// console.log(window);

document.getElementById("id").addEventListener("click", function () {
    console.log(this);
});

document.getElementById("id").addEventListener("click", () => {
    console.log(this);
});
