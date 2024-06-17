const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

/**
 * Function takes user input text and returns an alphanumeric string
 * @param {Text} inputText - Text from user
 * @returns {Text} The string with only alphanumerics
 */
const cleanInputText = (inputText) => {
    const regex = /[^A-Za-z0-9]/g; // Match all non-alphanumerics
    return inputText
        .replace(regex, "")
        .toLowerCase();
}

/**
 * Checks if the text given is a palindrome or not and returns the subsequent boolean
 * @param {Text} textToCheck 
 * @returns {Boolean} Whether or not the text is a palindrome
 */
const checkIfPalindrome = (textToCheck) => {
    let isPalindrome = false;
    if (textToCheck.length === 1) {
        return true;
    } else {
        const textArray = textToCheck.split("");
        if (textToCheck.length % 2 === 0) { // For an array of even length
            for (let i = 1; i < (textArray.length/2) + 1; i++) {
                if (textArray.at(i - 1) === textArray.at(-i)) {
                    isPalindrome = true;
                } else {
                    return false;
                }
            }
        } else { // For an array of odd length
            for (let i = 1; i < (textArray.length/2); i++) {
                if (textArray.at(i - 1) === textArray.at(-i)) {
                    isPalindrome = true;
                } else {
                    return false;
                }
            }
        }
        return isPalindrome;
    }
}

/**
 * Updates the DOM with the original input text and if it is a palindrome or not
 * @param {Boolean} isPalindrome Boolean result of the palindrome check 
 */
const displayResult = (isPalindrome) => {
    if (isPalindrome) {
        result.innerHTML = `
            <p>${textInput.value} is a palindrome</p>
            `
    } else {
        result.innerHTML = `
            <p>${textInput.value} is not a palindrome</p>
            `
    }
}

/**
 * Main function to run the palindrome checker
 */
const checkInput = () => {
    if (textInput.value === "") {
        alert("Please input a value");
    } else {
        const cleanedText = cleanInputText(textInput.value);
        const checkedResult = checkIfPalindrome(cleanedText);
        displayResult(checkedResult);
        
        textInput.value = ""; // Clear after submitting
    }
}

checkBtn.addEventListener("click", checkInput);