///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

// Set variable
var lowerCase = "abcdefghiklmnoprstquvwxyz";
var upperCase = "ABCDEFGHIKLMNOPRSTQUVWXYZ";
var numeric = "0123456789";
var character = "!@#$%^&*_-+=~<>?:;{}[]";


function generatePassword() {
  //set user password back to blank
  var length = 0;
  var userPassword = "";
  var userChoice = "";
  var optionLowerCase;
  var optionUpperCase;
  var optionNumeric;
  var optionCharacter;
        
  // Request length of the password
  length = parseInt(prompt("Password generator, please enter the length of your password from 8-128.", ""));

  // Require length    
  while (length < 8 || length > 128) {
      length = parseInt(prompt("Enter length of password between 8 - 128 characters", ""));
    return;
    }

  // User confirm to use or not the lower case letters 
  optionLowerCase = confirm("Do you want password to have lower case letters?");
  // User confirm to use or not the upper case letters
  optionUpperCase = confirm("Do you want password to have upper case letters?");
  //User confirm to use or not the numeric characters 
  optionNumeric = confirm("Do you want password to have numbers?");
  //User confirm to use or not the special characters
  optionCharacter = confirm("Do you want password to have special characters?");

// From user selected options generate random password.

  if (optionLowerCase) {
      userChoice += lowerCase;
  }
  if (optionUpperCase) {
      userChoice += upperCase;
  }
  if (optionNumeric) {
      userChoice += numeric;
  }
  if (optionCharacter) {
     userChoice += character;
  }
  for (let i = 0; i < length; i++) {
      userPassword += userChoice.charAt(
          Math.floor(Math.random() * userChoice.length)
      );
     
  }
  return userPassword;
}

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
