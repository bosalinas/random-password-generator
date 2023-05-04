var specialCharacters = ['!', '@', '#', '$', '%', '&', '?', '*'];
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var generateButton = document.querySelector("#generate");

function generatePassword() {
  
  //empty var to hold users choices 
  var userChoice = []; 
  var password = '';
  //prompt to ask the length of the password and exceptions
  var passwordLength = prompt("How long do you want your password to be? Between 8-128 character.");
  if (isNaN(passwordLength)) {
    alert("Enter a valid number.");
    return;
  }
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password needs to be between 8 and 128 characters in length.");
    return;
  }

  else if (passwordLength === "") {
    alert("Must have numerical value to generate password.")
    return;
  }
  //cofirm windown to ask for characters to be included
  confirmSpecial = confirm("Include special characters such as (!@#$) in your password?")
  confirmUppercase = confirm("Include uppercase letters in your password?")
  confirmLowercase = confirm("Include lowercase letters in your password?")
  confirmNumbers = confirm("Include numbers in your password?")
//concat (aka adding) the choices into the var userChoice
  if (confirmSpecial) {
    userChoice = userChoice.concat(specialCharacters);
  }

  if (confirmNumbers) {
    userChoice = userChoice.concat(numberCharacters);
  }

  if (confirmLowercase) {
    userChoice = userChoice.concat(lowercaseCharacters);
  }

  if (confirmUppercase) {
    userChoice = userChoice.concat(uppercaseCharacters);
  }
//if User choses nothing then it alerts them to an error
  if (confirmLowercase === false && confirmNumbers === false && confirmSpecial === false && confirmUppercase === false) {
    alert("You must have one set of characters to chose from.");
    return;
  }
//for loop to randomize password with the choices the User made
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * userChoice.length);
    password += userChoice[index];
  }
//puts password into the html container labeled #password
  var passwordTextbox = document.querySelector("#password");

  passwordTextbox.value = password;
}
//user clicking the button starts the function
generateButton.addEventListener("click", generatePassword);