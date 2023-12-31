//main logic of game

//the random number the user is suppose to guess
let randomNumber = Math.floor(Math.random() * 100) + 1;

//selects elements in the result display area
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//selects user number input and submit button
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

//determines if the guess was correct or not
function checkGuess() {
    const userGuess = Number(guessField.value);

    //appends new gusses to previous guesses
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;


    if (userGuess === randomNumber) {  //if the user guessed correctly

        //end the game and show win screen
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();

    } else if (guessCount === 10) {  //if the user ran out of turns
        
        //end the game and show lose screen
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = "";
        setGameOver();

    } else {  //if there are still more turns left
        
        //continously prompt for more input
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
        }
    }

    guessCount++;
    guessField.value = "";

    //guessfield to receive keyboard input
    guessField.focus();
}

//game over
function setGameOver() {

    //disables input 
    guessField.disabled = true;
    guessSubmit.disabled = true;

    //creates a restart button
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);

    resetButton.addEventListener("click", resetGame);
}

//resets game
function resetGame() {
    guessCount = 1;
    
    //resets all text of result display to ""
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  


//checks the guesses when the user clicks the submit button
guessSubmit.addEventListener("click", checkGuess);

