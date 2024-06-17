const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

// Function to report error message to the user
const sendMessage = (message) => {
    outputDiv.innerHTML = message;
}

// Clean the input / validate the number
const cleanNumber = (text) => {
    if (parseInt(text)) { // Checks to see if a number is passed in
        const number  = parseInt(text);
        if (Math.sign(number) === 1) { // Check for a positive integer
            if (number < 4000) { // Check if the number is bigger than or equal to 4000
                return number; // This is the cleaned number
            } else {
                sendMessage("Please enter a number less than or equal to 3999")
            }
        } else {
            sendMessage("Please enter a number greater than or equal to 1");
        }
    } else {
        sendMessage("Please enter a valid number");
    }
    return false;
}

// Convert number to roman numeral
const converter = (number) => {
    let romanNumeral = "";
    if (cleanNumber(number)) {
        let num = cleanNumber(number);
        for (let key in map) {
            romanNumeral += key.repeat(Math.floor(num / map[key]));
            num %= map[key];
        }
        sendMessage(romanNumeral);
    }
}

const displayAnswer = () => {
    converter(numberInput.value);
}

convertButton.addEventListener("click", function(event) {
    event.preventDefault();
    displayAnswer();
    numberInput.value = "";
});
