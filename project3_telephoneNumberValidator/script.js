const userInput = document.getElementById("user-input");
const btnCheck = document.getElementById("check-btn");
const btnClear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

function updateResults(result) {
    results.textContent = result;
}

function checkInput(input) {
    updateResults(input);
}

btnCheck.addEventListener("click", function(event) {
    event.preventDefault();
    checkInput(userInput.value);
});

btnClear.addEventListener("click", function(event) {
    event.preventDefault();
    userInput.value="";
    results.textContent="";
});