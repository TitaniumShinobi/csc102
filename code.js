// Devon Woodson, 08/09/2026

// JavaScript code for the meme movement & game page

// Stores the movement timer
var intervalID = null;


// Stores the current image position
var position = 0;

// Stores the current x and y coordinates of the image
var x = 0;
var y = 0;

// Stores the current direction of movement for the image
var xDirection = 1;
var yDirection = 1;

// Gets the naruto-ichiraku-ramen image from HTML
var meme = document.getElementById("naruto-ichiraku-ramen");


// Gets the sound file from HTML
var gameSound = document.getElementById("gameSound");

// Gets the buttons from HTML
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");

if (startButton) stopButton.disabled = true;


// Runs when Start button is clicked
function startMoving() {

    // Shows the meme image
    meme.style.display = "block";

    // Disables start button
    startButton.disabled = true;

    // Enables stop button
    stopButton.disabled = false;

    // Starts moving image
    intervalID = setInterval(moveImage, 100);
}


// Moves the meme image
function moveImage() {

    // Updates the x and y coordinates based on the current direction of movement
    x += 4 * xDirection;
    y += 5 * yDirection;

    // Moves image across the screen
    meme.style.left = x + "px";
    meme.style.top = y + "px";

    // Reverses direction if image hits the boundaries
    if (x > 400 || x < 0) {
        xDirection *= -1;
    }

    if (y > 250 || y < 0) {
        yDirection *= -1;
    }
}


// Runs when Stop button is clicked
function stopMoving() {

    // Disables stop button
    stopButton.disabled = true;

    // Enables start button
    startButton.disabled = false;


    // Stops the image movement
    clearInterval(intervalID);
}


// Connects buttons to events (only on pages that have them)
if (startButton) {
    startButton.onclick = startMoving;
    stopButton.onclick = stopMoving;
}


// Changes text for the game page
function updateText() {
    document.getElementById("heading").innerHTML = "Javascript is awesome!";
    // Plays sound effect
    gameSound.play();
}

var updateTextButton = document.getElementById("updateText");
if (updateTextButton) {
    updateTextButton.onclick = updateText;
}