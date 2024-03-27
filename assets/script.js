
var generateBtn = document.querySelector("#generate");
var lettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 
var passwordText = document.querySelector("#password");


function writePassword() {

  var userNumberChoice = window.prompt("Enter the number of characters in your password (only 8 - 128 characters allowed):");

  // If user pressed Cancel, immediately end function
  if (!userNumberChoice) {
    return;
  }

  console.log(userNumberChoice);

  if (userNumberChoice < 8) {
    window.alert("Please enter an appropriate response");
    return;
  }

  if (userNumberChoice > 128) {
    window.alert("Please enter an appropriate response");
    return;
  }

  var specialCharChoice = window.prompt("Click OK to confirm including special characters.");
  
  if (!specialCharChoice) {
    
  }

  var includeNumericChar = window.prompt("Click OK to confirm including numeric characters.");
  
  if (!includeNumericChar) {
    
  }

  var includeLowerCase = window.prompt("Click OK to confirm including lowercase characters.");
  
  if (!includeLowerCase) {
    
  }

  var includeUpperCase = window.prompt("Click OK to confirm including uppercase characters.");
  
  if (!includeUpperCase) {
    
  }

  // Function returns a string of concatenated characters of length num
  function passwordGenerator(userNumberChoice) {
  var password = '';
  for (var i = 0; i < userNumberChoice; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

  var newPassword = passwordGenerator(userNumberChoice);
  console.log(newPassword)
  // passwordText.text(newPassword);

  passwordText.value = newPassword;

}

// Function returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
