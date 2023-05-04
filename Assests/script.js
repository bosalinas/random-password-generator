
var specialCharacters = ['!','@','#','$','%','&','?','*'];
var numeriaCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','B','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var passwordOptions = []  // think of this as a temp container 
var passwordOptionsStr = []  // think of this as a temp container 
var passwordSelected = []  // think of this as a temp container 


function getPasswordLength() {
  let passwordLength = prompt("How many characters would you like in your password?")
  console.log("Length: ", passwordLength); }
  // based on the length entered by the USER we do one action or another
  // Conditional Statement
  if(passwordLength < 8 || passwordLength > 128 ) {
    alert("Password length must be greater than 8 and less than 128 characters");
    return;
  }
    function getPasswordOptions() {
      let person = confirm("Include special characters in your password?");
      if (person != null); 
    }

//function to prompt user for password options
function getPasswordOptions() {
  let person = confirm("Include number characters in your password?");
  if (person != null) 
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}

// WhAT logic should run if the user answer YES?
if(person === true) {
  getRandom(specialCharacters)
}
// we want to GRAB a single VALUE from the DATASET --> what do we do with this value ? (store that and any addtional values somewhere)
// we want to run a random() function to choose a single values from the ARRAY dataset
passwordOptions.push(specialCharacters);
passwordSelected.push(specialCharacters[3]);


// WhAT logic should run if the user answer NO? 
if(person === false) {
  // nothing happens
}


let numberChoice = confirm("Include numbers in your password?");
let upperCharChoice = confirm("Include uppercase chars in your password?");
let lowerCharChoice = confirm("Include lowercase chars in your password?");
console.log(person, numberChoice, upperCasedCharacters, lowerCasedCharacters)  // --> (true, true, true, true)

if(person === true && numberChoice === true && upperCharChoice === true && lowerCharChoice === true) {
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

var generatePassword = function(){

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
