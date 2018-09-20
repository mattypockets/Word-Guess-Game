// List of words to pull from
var wordBank = ["mario",
"yoshi",
"pikachu",
"kirby",
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
var displayWord = "";


// Check if input equals one of the letters
// If input does not match letter, reduce number of guesses by one
function checkGuess(letter) {

    // Array to store positions of letters in string
    var positions = [];
    console.log(displayWord);
    let letterArray = displayWord.split("");

    // Loop through word finding all instances of guessed letter, store the indicies in an array
    for (i = 0; i < letterArray.length; i++) {
        if (letterArray[i] === letter) {
            positions.push([i]);
        }
    }

    // if there are no indicies, remove a guess
    if (positions.length <= 0) {
        guessesLeft--;
    } else {
        // Loop through all the indicies and replace the '_ ' with a letter
        for(i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
            
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
        guessingWord.push("_ ");
    }

    displayWord = (wordBank[guessingWordIndex]);
    

    document.getElementById("gameScreen").src = "assets/images/go.jpg";
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

// Check if the player has won
function checkWin() {
    if (guessingWord.indexOf("_ ") === -1 ) {
        wins ++;
        document.getElementById("gameScreen").src = "assets/images/success.png";
        document.getElementById("startReset").innerText = "Press any key to play again";
        gameOver = true;
    }

}

// Check if the player has lost
function checkLoss() {
    if (guessesLeft == 0) {
        document.getElementById("gameScreen").src = "assets/images/failure.jpg";
        document.getElementById("startReset").innerText = "Press any key to try again";
        gameOver = true;
    }
};





// Event listener
document.onkeydown = function(event) {
    // Start a new game if Game Over
    if(gameOver) {
        resetGame();
        gameOver = false;
    } 
    else {
        // Check to make sure a-z was pressed
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key);
            updatePage();
            checkWin();
            checkLoss();
            console.log(guessingWord);
        }
    }
};
