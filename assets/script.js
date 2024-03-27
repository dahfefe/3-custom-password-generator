
var generateBtn = document.querySelector("#generate");
var charArray = [];
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

  var specialCharChoice = window.confirm("Click OK to confirm including special characters.");
  if (specialCharChoice) {
    charArray.push("!, #, $, %, &, +, ?, @");
    console.log(charArray);
  }

  var includeNumericChar = window.confirm("Click OK to confirm including numeric characters.");
  if (includeNumericChar) {
    charArray.push("1, 2, 3, 4, 5, 6, 7, 8, 9");
    console.log(charArray);
  }

  var includeUpperCase = window.confirm("Click OK to confirm including uppercase characters.");
  if (includeUpperCase) {
    charArray.push("A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, O, R, S, T, U, V, W, X, Y, Z"); 
    console.log(charArray);
  }

  var includeLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
  if (includeLowerCase) {
    charArray.push("a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z");
    console.log(charArray);
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
  var index = Math.floor(Math.random() * charArray.length);
  console.log(index);
  return charArray[index];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
