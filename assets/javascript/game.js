// List of words to pull from
var wordBank = ["mario",
"yoshi",
"pikachu",
"kirby",
"donkey kong",
"captain falcon",
"fox",
"link",
"jigglypuff",
"luigi",
"samus",
"ness"];

// Establish other base variables

var wins = 0;               // Number of wins
var guessesLeft = 7;        // Number of guesses left
var lettersGuessed = [];    // Stores which letters have been guessed
var gameOver = true;       // Flag to start/restart the game
var guessingWordIndex;      // Index of the current word
var guessingWord = [];      // Current word


// Check if input equals one of the letters
// If input does not match letter, reduce number of guesses by one
function checkGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < guessingWord.length; i++) {
        if(guessingWord[i] === letter) {
            positions.push(i);
        }
    }

    // if there are no indicies, remove a guess
    if (positions.length < 0) {
        guessesLeft--;
    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] == letter;
        }
    }
};



// List which letters have been guessed





// Reset Game
function resetGame() {

    guessesLeft = 7;

    // Choose a random word from wordBank
    guessingWordIndex = Math.floor(Math.random()*wordBank.length);

    lettersGuessed = [];
    guessingWord = [];

    // Create Guessing Word for page
    for (i=0; i<wordBank[guessingWordIndex].length; i++) {
        guessingWord.push("_");
    }

    updatePage();
};





// Update HTML on page
function updatePage() {

    document.getElementById("winCount").innerText = wins;

    var wordDisplay = "";
    for (var i = 0; i < guessingWord.length; i++) {
        wordDisplay += guessingWord[i];
    }

    document.getElementById("currentWord").innerText = wordDisplay;
    document.getElementById("guessesLeft").innerText = guessesLeft;
    document.getElementById("lettersGuessed").innerText = lettersGuessed;
};





// Make a guess
function makeGuess(letter) {
    if (guessesLeft > 0) {
        // Check if letter has been used yet
        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            checkGuess(letter);
        }
    }
};





// Event listener
document.onkeydown = function(event) {
    // If we finished a game, dump one keystroke and reset.
    if(gameOver) {
        resetGame();
        gameOver = false;
    } 
    else {
        // Check to make sure a-z was pressed.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key);
            updatePage();
            // checkWin();
            // checkLoss();
        }
    }
};
