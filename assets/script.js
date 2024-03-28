
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var specialCharacterArray = "!#$%&+?@".split(""); 
var numericalCharArray = "123456789".split(""); 
var upperCaseLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseCaseLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");

console.log(upperCaseLettersArray);
console.log(lowercaseCaseLettersArray);

function writePassword() {

  var charArray = [];
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

  var specialCharChoice = window.confirm("Click OK to confirm including special characters.");
  if (specialCharChoice) {
    charArray.push(specialCharacterArray);
    console.log(charArray);
  }

  var includeNumericChar = window.confirm("Click OK to confirm including numeric characters.");
  if (includeNumericChar) {
    charArray.push(numericalCharArray);
    console.log(charArray);
  }

  var includeUpperCase = window.confirm("Click OK to confirm including uppercase characters.");
  if (includeUpperCase) {
    charArray.push(upperCaseLettersArray);
    console.log(charArray);
  }

  var includeLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
  if (includeLowerCase) {
    charArray.push(lowercaseCaseLettersArray);
    console.log(charArray);
  }

  if (!specialCharChoice && !includeNumericChar && !includeUpperCase && !includeLowerCase) {
    window.alert("You MUST select at least one character type.");
    return;
  }

  // Function returns a string of concatenated characters of length num
  function passwordGenerator(userNumberChoice) {
  var password = '';
  for (var i = 0; i < userNumberChoice; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

function getPasswordCharacter() {
  var randomArrayIndex = Math.floor(Math.random() * charArray.length);

  const chosenCharArray = charArray[randomArrayIndex];

  var randomCharacterIndex = Math.floor(Math.random() * chosenCharArray.length);
  return chosenCharArray[randomCharacterIndex];
}

  var newPassword = passwordGenerator(userNumberChoice);
  console.log(newPassword)
  passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
