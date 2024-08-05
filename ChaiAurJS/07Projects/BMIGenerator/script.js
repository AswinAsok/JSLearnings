const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    console.log(results);
    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Enter Valid Height";
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Enter Valid Weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        //show the result

        results.innerHTML = `<span>${bmi}</span>`;
    }
});
