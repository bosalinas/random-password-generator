var specialCharacters = ['!', '@', '#', '$', '%', '&', '?', '*'];
var numeriaCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var passwordOptions = []  // think of this as a temp container 
var passwordOptionsStr = []  // think of this as a temp container 
var passwordSelected = []  // think of this as a temp container 
var person = []

//asks user for password length
function getPasswordLength() {
  let passwordLength = prompt("How many characters would you like in your password?", "")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be greater than 8 and less than 128 characters");
    return null;
  }
}

console.log("Length: ", getPasswordLength);

//asks user for password options
function getPasswordOptions() {
  if (confirm("Include special characters in your password?") === true) {
  }
}

function getPasswordOptions() {
  let person = confirm("Include number characters in your password?");
  if (person === true) {
    return index;
  }
}

// WhAT logic should run if the user answer YES?
if (person === true) {
  getRandom(specialCharacters)
}
// we want to GRAB a single VALUE from the DATASET --> what do we do with this value ? (store that and any addtional values somewhere)
// we want to run a random() function to choose a single values from the ARRAY dataset
passwordOptions.push(specialCharacters);
passwordSelected.push(specialCharacters[3]);


// WhAT logic should run if the user answer NO? 
if (person === false) {
  // nothing happens
}

if (person === true && numberChoice === true && upperCharChoice === true && lowerCharChoice === true) {
  getRandom(specialCharacters);
  getRandom(numeriaCharacters);
  getRandom(upperCasedCharacters);
  getRandom(lowerCasedCharacters);

  console.log("Current Password: ", passwordSelected);
}


// THis only gives us AT MOST 4 chars in our passsword  --> 


//function to getting a random element from an array
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length)   //    0.1 * 10 = 1 
  console.log("Random Num: ", index);

  passwordSelected.push(arr[index]);
}

//function to generate password with user input
function generatePassword() {
}

var generatePassword = function () {

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//---------------------------------------------------------------------------------//
let numberChoice = confirm("Include numbers in your password?");
let upperCharChoice = confirm("Include uppercase chars in your password?");
let lowerCharChoice = confirm("Include lowercase chars in your password?");
console.log(person, numberChoice, upperCasedCharacters, lowerCasedCharacters)



var passwordLength = [];

function getPasswordOptions() {

  if (passwordLength =  );
  {
    alert('Must enter a number.');
    return null;
  }
  
}

function getPasswordLength() {
  let passwordLength = prompt("How many characters would you like in your password?", "")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be greater than 8 and less than 128 characters.");
    return null;
  }
}

var choiceSpecialC = []
var choiceNumbers = []
var choiceLowercase = []
var choiceUppercase = []


if (
  choiceSpecialC === false &&
  choiceNumbers === false &&
  choiceLowercase === false &&
  choiceUppercase === false
) {
  alert('Must select at least one character type');
  return null;
}

// Variable to store length of password from user input
// Conditional statement to check if password length is a number. Prompts end if this evaluates false
// Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
// Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
// Variable to store boolean regarding the inclusion of special characters
// Variable to store boolean regarding the inclusion of numeric characters
// Variable to store boolean regarding the inclusion of lowercase characters
// Variable to store boolean regarding the inclusion of uppercase characters
// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);