var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var playerGuess = null;
var randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + lettersGuessed + " I picked: " + randomletter);

document.onkeyup = function(event) {
   var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
   if (lettersGuessed.indexOf(playerGuess) < 0 && alphabet.indexOf(playerGuess) >= 0) {
       lettersGuessed[lettersGuessed.length]=playerGuess;
       guessesLeft--;
   }
   if (randomletter === playerGuess) {
       alert("You guessed it! Good job, try again.")
       wins++;
       guessesLeft= 9;
       lettersGuessed = [];
       randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
       console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + lettersGuessed + " I picked: " + randomletter);
   }

   if (guessesLeft === 0) {
       alert("You lose! Try again.");
       losses++;
       guessesLeft = 9;
       lettersGuessed = [];
       randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
       console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + lettersGuessed + " I picked: " + randomletter);
   }

   var html = 
   + "<p>Guess what letter I\'m thinking of</p>" 
   + "<p>Wins: " + wins + "</p>" 
   + "<p>Losses: " + losses + "</p>" 
   + "<p>Guesses Left: " + guessesLeft + "</p>" 
   + "<p>Your guesses so far: " + lettersGuessed + "</p>";

   document.querySelector("#game").innerHTML = html;
}