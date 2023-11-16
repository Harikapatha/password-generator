// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() 
{ 
// Ask user for password length
const length = window.prompt("Enter password length between 8 and 128 character");
// Ask user to confirm below
const uppercase = window.confirm("include uppercase");
const lowercase = window.confirm("include lowercase");
const numbers = window.confirm("include numbers");
const special = window.confirm("include special char");
const charset = createCharset(uppercase, lowercase, numbers, special); 

if (charset.length === 0) {
    alert('Please select at least one character type.'); 
    return; 
   } 
const password = generateRandomPassword(length, charset); 
return password;
    
}

function createCharset(uppercase, lowercase, numbers, special) 
{ 
    let charset = '';

    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz'; 
    if (numbers) charset += '0123456789';
    if (special) charset += '!@#$%^&*()_+[]{}|;:,.<>?'; 

    return charset; 

} 

function generateRandomPassword(length, charset)
{ 
    let password = '';
    for (let i = 0; i < length; i++) 
{ 
    const randomIndex = Math.floor(Math.random() * charset.length); 
    password += charset.charAt(randomIndex);
} 
return password; 
}     

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
