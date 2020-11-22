// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password options as arrays
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alpha = "abcdefghijklmnopqrstuvwxyz"
var lowerCaseChar = alpha.split("");
var upperCaseAlpha = alpha.toUpperCase();
var upperCaseChar = upperCaseAlpha.split("");
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", ".", "|", "~", "?"];

// prompts to determin password criterias 
function generatePassword() {

  var passwordLength = prompt("Please enter the length of your password. (Password must be between 8 to 128 characters.)");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  var passwordOptions = [];
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please enter again.");
  } else if(passwordLength >=8 && passwordLength <=128) {
    var wantNumber = confirm("Do you want numbers in your password? please click ok to select.");
    if (wantNumber) {
      passwordOptions = passwordOptions.concat(numericChar);
    }
    var wantLowerCase = confirm("Do you want lowercase characters in your password? please click ok to select.");
    if (wantLowerCase) {
      passwordOptions = passwordOptions.concat(lowerCaseChar);
    }
    var wantUpperCase = confirm("Do you want uppercase characters in your password? please click ok to select.");
    if (wantUpperCase) {
      passwordOptions = passwordOptions.concat(upperCaseChar);
    }
    var wantSpecialChar = confirm("Do you want special characters in your password? please click ok to select.");
    if (wantSpecialChar) {
      passwordOptions = passwordOptions.concat(specialChar)
    }
    console.log(passwordOptions);
    if (passwordOptions.length === 0) {
      alert("Please select at least one character type for you password.");
    } else {
      var randomPassword = [];
      for (var i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * passwordOptions.length);
        randomPassword += passwordOptions[randomIndex];
        console.log(randomPassword);
      }
    }
  } else {
    alert("Please enter valid password length.")
  }
  return (randomPassword);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
