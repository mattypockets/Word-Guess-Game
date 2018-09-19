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

var wins = 0;
var guessesLeft = 7;

var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// Choose a random word from wordBank
var word = wordBank[Math.floor (Math.random()*wordBank.length)];

// Display _ for each letter in the random word
var answer = [];
for (i=0; i < word.length; i++) {
    answer[i] = "_";
    console.log(answer);
}

// Check if input equals one of the letters



// If input matches letter, replace _ with correct letter

// If input does not match letter, reduce number of guesses by one

// List which letters have been guessed

