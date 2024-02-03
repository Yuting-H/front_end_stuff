
let playBoxes = document.getElementsByClassName("play-box")

let displayBoxes = document.getElementsByClassName("display-box")

let resetButton = document.getElementById("reset")

var turn = "X"

// When a play box is clicked
function onBoxClick(index){
    
    //return this logic 
    return function() {

        //if the box is empty
        if (displayBoxes[index].innerHTML == "") {
            displayBoxes[index].innerHTML = turn    //draw X in box
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

function resetGame() {
    for (let index = 0; index < displayBoxes.length; index++) {
        displayBoxes[index].innerHTML = ""
    }
}

//adding event listeners to each box
for (let index = 0; index < displayBoxes.length; index++) {
    playBoxes[index].addEventListener("click", onBoxClick(index))
}

resetButton.addEventListener("click", resetGame)




