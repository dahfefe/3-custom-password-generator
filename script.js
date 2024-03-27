// Assignment Code
var generateBtn = document.querySelector("#generate");

var lettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // we have to create a function called "generatePassword" that returns the password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// we will definitely use the random selection method in mini project + picking a number from the array with this random number
// there's a bunch of ways to achieve this
// 