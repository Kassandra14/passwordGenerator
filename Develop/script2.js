//variables

var lowerCasedLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericalCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = [':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', '@', '%', '!', '#', '$', '^', '?', '+', '\\', '/', "'"];
//Prompting user for preffered password length
function getPassInput() {
    //storing the users length preference
    var length = parseInt(
        prompt("How long would you like your password. Please pick between 8 and 129")
    );
    //checking if user entered a valid number and length, if not valid, send an alert    
    if (isNaN(length) === true) {
        alert("Please provide a number");
        return;
    }

    if (length > 128) {
        alert("Please provide a number less than 129");
        return;
    }

    if (length < 8) {
        alert("Please provide a number larger than 7");
    }
    //user chooses if they want to include lowercase letters, uppercase letters, numbers & special characters in the password using confirm
    var hasLowerCasedLetters = confirm(
        "Click OK to include lowercase letters in password."
    );

    var hasUpperCasedLetters = confirm(
        "Click OK to include uppercase letters in password."
    );

    var hasNumericalCharacters = confirm(
        "Click OK to include numbers in password."
    );

    var hasSpecialCharacters = confirm(
        "Click OK to include special characters in password."
    );
    // Send alert to user if they didnt add any of the previous prompted character
    if (!hasLowerCasedLetters && !hasUpperCasedLetters && !hasNumericalCharacters && !hasSpecialCharacters) {
        alert("Please select at least one option.");
        return;
    }
    //Store the users answers
    var passwordInput = {
        length: length,
        hasLowerCasedLetters: hasLowerCasedLetters,
        hasUpperCasedLetters: hasUpperCasedLetters,
        hasNumericalCharacters: hasNumericalCharacters,
        hasSpecialCharacters: hasSpecialCharacters
    };

    return passwordInput;
}//end of first function

//Pick random characters from the character arrays to use in the pass
function pickRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomEl = arr[randomIndex];
    return randomEl;
}
//Generating password
function generatePassword() {
    var userInput = getPassInput();
    var result = [];
    var potentialCharacters = [];
    var guaranteedCharacters = [];

    //  adding array of each type of character into array of pontential characters  
    //  Getting a random character and pushing it to the guaranteedCharacter Array
    if (userInput.hasLowerCasedLetters) {
        potentialCharacters = potentialCharacters.concat(lowerCasedLetters);
        guaranteedCharacters.push(pickRandom(lowerCasedLetters));
    }

    if (userInput.hasUpperCasedLetters) {
        potentialCharacters = potentialCharacters.concat(upperCasedLetters);
        guaranteedCharacters.push(pickRandom(upperCasedLetters));
    }

    if (userInput.hasNumericalCharacters) {
        potentialCharacters = potentialCharacters.concat(numericalCharacters);
        guaranteedCharacters.push(pickRandom(numericalCharacters));
    }

    if (userInput.hasSpecialCharacters) {
        potentialCharacters = potentialCharacters.concat(specialCharacters);
        guaranteedCharacters.push(pickRandom(specialCharacters));
    }

    for (var i = 0; i < userInput.length; i++) {
        var potentialCharacters = pickRandom(potentialCharacters);
        result.push(potentialCharacters);
    }

    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }

    return result.join('');
}


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  
}