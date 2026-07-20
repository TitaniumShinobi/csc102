// Connects form submission to validation
document.getElementById("secretForm").onsubmit = validate;

// Runs when the user submits the form
function validate(event) {
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