
let playBoxes = document.getElementsByClassName("play-box")

let displayBoxes = document.getElementsByClassName("display-box")

let resetButton = document.getElementById("reset")

var turn = "X"

// When a play box is clicked
function onBoxClick(index){

    //return this logic 
    return function() {

        resetButton.disabled = false
        resetButton.style.visibility = "visible"
        //if the box is empty
        if (displayBoxes[index].innerHTML == "") {
            displayBoxes[index].innerHTML = turn    //draw X in box
            checkWin(index)
            switchPlayer()      //switch to O

        }
        
    }
}

//switch between the players
function switchPlayer() {
    if (turn.localeCompare("X") == 0) {
        turn = "O"
    }else {
        
        turn = "X"
    }
}

//Function that resets the game 
function resetGame() {

    resetButton.disabled = true
    resetButton.style.visibility = "hidden"
    turn = "X"
    //clears the game board
    for (let index = 0; index < displayBoxes.length; index++) {
        displayBoxes[index].innerHTML = ""
    }
}

function checkWin (idnex) {
    
}

//adding event listeners to each box
for (let index = 0; index < displayBoxes.length; index++) {
    playBoxes[index].addEventListener("click", onBoxClick(index))
}

//When the reset button is clicked, clear the game board
resetButton.addEventListener("click", resetGame)

resetButton.style.visibility = "hidden"


