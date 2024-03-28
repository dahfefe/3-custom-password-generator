
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var specialCharacterArray = "!#$%&+?@".split(""); 
var numericalCharArray = "123456789".split(""); 
var upperCaseLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseCaseLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");

console.log(upperCaseLettersArray);
console.log(lowercaseCaseLettersArray);

// Function that prompts user thru a series of questions that will apply criteria to a newly generated password
// criteria include the following user-selected inputs: range of characters (8-128), special characters, numeric characters, uppercase letters, and/or lowercase letters
function writePassword() {

  var charArray = [];
  var userNumberChoice = window.prompt("Enter the number of characters in your password (only 8 - 128 characters allowed):");

  // If user pressed Cancel, immediately end function
  if (!userNumberChoice) {
    return;
  }

  console.log(userNumberChoice);

  // conditional to stop generation if user selects a password range less than 8 characters
  if (userNumberChoice < 8) {
    window.alert("Please enter an appropriate response");
    return;
  }

    // conditional to stop generation if user selects a password range more than 128 characters
  if (userNumberChoice > 128) {
    window.alert("Please enter an appropriate response");
    return;
  }

  // conditional to introduce a new array of characters (special characters) if user selects "OK" on confirm prompt
  var specialCharChoice = window.confirm("Click OK to confirm including special characters.");
  if (specialCharChoice) {
    charArray.push(specialCharacterArray);
    console.log(charArray);
  }

   // conditional to introduce a new array of characters (numeric characters) if user selects "OK" on confirm prompt
  var includeNumericChar = window.confirm("Click OK to confirm including numeric characters.");
  if (includeNumericChar) {
    charArray.push(numericalCharArray);
    console.log(charArray);
  }

   // conditional to introduce a new array of characters (uppercase letters) if user selects "OK" on confirm prompt
  var includeUpperCase = window.confirm("Click OK to confirm including uppercase characters.");
  if (includeUpperCase) {
    charArray.push(upperCaseLettersArray);
    console.log(charArray);
  }

   // conditional to introduce a new array of characters (lowercase letters) if user selects "OK" on confirm prompt
  var includeLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
  if (includeLowerCase) {
    charArray.push(lowercaseCaseLettersArray);
    console.log(charArray);
  }

   // conditional to stop Javascript if user specifies NO criteria type of characters
  if (!specialCharChoice && !includeNumericChar && !includeUpperCase && !includeLowerCase) {
    window.alert("You MUST select at least one character type.");
    return;
  }

  // Function returns a string of concatenated characters of length userNumberChoice
  function passwordGenerator(userNumberChoice) {
  var password = '';
  for (var i = 0; i < userNumberChoice; i++) {
    password += getPasswordCharacter();
  }
  return password;
}


// Function selects random index among a set of arrays and then randomly selects an index within that array to assign a random value to new password generation
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

// Add event listener to generate new password
generateBtn.addEventListener("click", writePassword);
