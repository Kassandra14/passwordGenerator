// Assignment Code
var generateBtn = document.querySelector("#generate");


var letterSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T', 'U','V','W','X','Y','Z'];
var numberSet = ['0','1','2','3','4','5','6','7','8','9'];
var symbolSet = ['"','!','@','#','$','%','^','&','*','_','-','+','='];


function getPassInput() {

var passwordLength = parseInt(window.prompt('How many characters do you want your password to be?'));
  // Invalid length, end function
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('password must have at least 8 characters but less than 128 characters.');
  return;
  }
  var hasLetters = confirm(
    "Click OK to include letters in password."
);

var hasNumericalCharacters = confirm(
    "Click OK to include numbers in password."
);

var hasSpecialCharacters = confirm(
    "Click OK to include special characters in password."
);
    //Store the users answers
    var passwordInput = {
      passwordLength: length,
      hasLetters: hasLetters,
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

    //Not sure why this is only generating one character of each type
    if (userInput.hasLetters) {
      potentialCharacters = potentialCharacters.concat(letterSet);
      guaranteedCharacters.push(pickRandom(letterSet));
  }


  if (userInput.hasNumericalCharacters) {
      potentialCharacters = potentialCharacters.concat(numberSet);
      guaranteedCharacters.push(pickRandom(numberSet));
  }

  if (userInput.hasSpecialCharacters) {
      potentialCharacters = potentialCharacters.concat(symbolSet);
      guaranteedCharacters.push(pickRandom(symbolSet));
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


// Write password to password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




