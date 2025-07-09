//example 1

document.getElementById("changeTextButton").addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Paragraph is Changed";
});

// example 2

document.getElementById("highlightFirstCity").addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});

// example 3

document.getElementById("changeOrder").addEventListener("click", function () {
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
    coffeeType.style.padding = "5px";
});

// example 4

document.getElementById("addNewItem").addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
});

//example 6

document.getElementById("clickMeButton").addEventListener("dblclick", function () {
    alert("chaicode");
});

//example 7

document.getElementById("teaList").addEventListener("click", function (event) {
    if (event.target && event.target.matches("#teaItem")) {
        console.log(teaItem);
        alert("You selected: " + event.target.textContent);
    }
});

document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let feedback = document.getElementById("feedbackInput").value;

    document.getElementById("formMessage").textContent = feedback;
});
