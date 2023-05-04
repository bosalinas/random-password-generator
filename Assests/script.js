var specialCharacters = ['!', '@', '#', '$', '%', '&', '?', '*'];
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var userChoice = []  // think of this as a temp container 
var password = ''

function generatePassword() {
  if (passwordLength < 8 || passwordLength > 128) {
    return "Password needs to be between 8 and 128 characters in length."
  }

  else if (passwordLength = "") {
    return "Must have numerical value to generate password."
  }
}

confirmSpecial = confirm("Include special characters such as (!@#$) in your password?")

if (confirmSpecial) {
  userChoice = userChoice.concat(specialCharacters);
}

confirmNumbers = confirm("Include numbers in your password?")

if (confirmNumbers) {
  userChoice = userChoice.concat(numberCharacters);
}

confirmLowercase = confirm("Include lowercase letters in your password?")

if (confirmLowercase) {
  userChoice = userChoice.concat(lowercaseCharacters);
}


confirmUppercase = confirm("Include uppercase letters in your password?")

if (confirmUppercase) {
  userChoice = userChoice.concat(uppercaseCharacters);
}

for (var i=0; i < passwordLength; i++){
  var
}