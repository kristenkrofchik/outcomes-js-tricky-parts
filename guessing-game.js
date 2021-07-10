function guessingGame() {
    //create variables for random number, gameOver, and number of guesses
    let num = Math.floor(Math.random() * 100);
    let gameOver = false;
    let numGuesses = 0;

    //return a function to makeGuess(the random number will remain the same as the user makes their guesses)
    return function makeGuess(guess) {
        if(gameOver) {
            return `The game is over, you already won!`
        }
        //if user guesses the correct number, set gameOver to true and return winning statement
        if(guess === num) {
            numGuesses++;
            gameOver = true;
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${numGuesses} ${guess}.`
        //else if the user guesses an incorrect number, give them a hint (higher, lower) and raise the numGuesses count
        } else if(guess < num) {
            numGuesses++;
            return `${guess} is too low!`
        } else if(guess > num) {
            numGuesses++;
            return `${guess} is too high!`
        }
    }
}

let game = guessingGame();
game(50);

module.exports = { guessingGame };
