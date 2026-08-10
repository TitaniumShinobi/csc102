// Gets the content area
var content = document.getElementById("content");


// Class: Creates a Palindrome object
class PalindromeCheck {

    // Stores the word being checked
    constructor(word) {
        this.word = word;
    }

    // Checks if the word is a palindrome
    isPalindrome() {
        return checkPalindrome(this.word);
    }
}


// Loop Counter: Stores the number of attempts made by the user
var attempts = 0;


// Array Collection: Stores confirmed palindrome words
var previousPalindromes = [];


// Shows exit message
function resetPage() {

    content.innerHTML =
    "<h2>Session Ended</h2>" +
    "<p>Thank you for using the Secret Message Terminal.</p>";
}


// Shows palindrome checker
function showPalindrome() {

    content.innerHTML =
    "<h2>Palindrome Checker</h2>" +
    "<p>Enter your word to check if it's a palindrome:</p>" +
    "<input type='text' id='userInput'>" +
    "<button id='checkButton'>Check</button>" +
    "<button id='resetButton'>Reset</button>" +
    "<p id='message'></p>";

    document.getElementById("message").innerHTML = "";

    document.getElementById("checkButton").onclick = validatePalindrome;

    document.getElementById("resetButton").onclick = resetPage;
}


// Shows secret message
function showSecret() {

    content.innerHTML =
    "<h2>Secret Message</h2>" +
    "<form id='secretForm'>" +
    "<p>Enter your information to unlock the secret message:</p>" +
    "<label>First Name:</label>" +
    "<input type='text' id='firstName'>" +

    "<label>Last Name:</label>" +
    "<input type='text' id='lastName'>" +

    "<label>Zip Code:</label>" +
    "<input type='text' id='zipCode'>" +

    "<input type='submit' value='Unlock'>" +
    "</form>" +
    
    "<button id='resetButton'>Reset</button>" +
    "<p id='message'></p>";

    document.getElementById("secretForm").onsubmit = validateSecret;

    document.getElementById("resetButton").onclick = resetPage;
}


// Connect buttons
document.getElementById("palindromeButton").onclick = showPalindrome;

document.getElementById("secretButton").onclick = showSecret;

// Runs when the user submits the form
function validateSecret(event) {
    // Prevents page refresh
    event.preventDefault();
    // Gets first name
    var firstName = document.getElementById("firstName").value;
    // Gets last name
    var lastName = document.getElementById("lastName").value;
    // Gets zip code
    var zipCode = document.getElementById("zipCode").value;

    // Trim spaces so "   " counts as empty
    firstName = firstName.trim();
    lastName = lastName.trim();
    zipCode = zipCode.trim();

    // Required first name check
    if (!firstName) {
        document.getElementById("message").innerHTML =
        "First name is required.";
        return;
    }

    // Required last name check
    if (!lastName) {
        document.getElementById("message").innerHTML =
        "Last name is required.";
        return;
    }

    // Required zip code check
    if (!zipCode) {
        document.getElementById("message").innerHTML =
        "Zip code is required.";
        return;
    }

    // Combines first and last name
    var fullName = firstName + " " + lastName;

    // Checks name length
    if (fullName.length > 20) {

        document.getElementById("message").innerHTML =
        "Name is too long!";

        return;
    }

    // Checks zip code length
    if (zipCode.length != 5) {

        document.getElementById("message").innerHTML =
        "Zip code must contain 5 digits.";

        return;
    }

    // Checks zip code contains only numbers
    if (isNaN(zipCode)) {

        document.getElementById("message").innerHTML =
        "Zip code must only contain numbers!";

        return;
    }

    // Displays secret message
    document.getElementById("message").innerHTML =
    "<div class='secret-card'>" + "<h2>🔐 ACCESS GRANTED 🔐</h2>" + "<h3 class='welcome-message'>Welcome " + fullName + " from " + zipCode + "!</h3>" + "<br> You have successfully passed validation." + "<br><img src='assets/smile.svg' alt='Smile'>" + "<br><h3><span class='secret-label'>[SECRET MESSAGE]:</span> UAT is awesome!</h3>" + "</div>";
}


// Checks if a string is a palindrome
function checkPalindrome(word) {

    // Removes spaces and makes everything lowercase
    var cleanedWord = word.replaceAll(" ", "").toLowerCase();

    // Stores reversed string
    var reversedWord = "";

    // Loop through the string backwards
    for (var i = cleanedWord.length - 1; i >= 0; i--) {

        // Adds each character to reversedWord
        reversedWord += cleanedWord.charAt(i);
    }

    // Checks if both strings match
    if (cleanedWord == reversedWord) {

        return true;

    } else {

        return false;
    }
}


function validatePalindrome() {

    var userWord = document.getElementById("userInput").value;

    attempts++;

    // Creates a new palindrome object
    var palindrome = new PalindromeCheck(userWord);

    if (palindrome.isPalindrome()) {

        // Adds confirmed palindrome to collection
        previousPalindromes.push(userWord);

        document.getElementById("message").innerHTML =
        "Attempt #" + attempts + ": ✅ " + userWord + " is a palindrome!" +
        "<br>Previous palindromes: " + previousPalindromes;

    } else {

        document.getElementById("message").innerHTML =
        "Attempt #" + attempts + ": ❌ " + userWord + " is not a palindrome.";
    }
}