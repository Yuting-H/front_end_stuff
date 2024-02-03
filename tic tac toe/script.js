
let playBoxes = document.getElementsByClassName("play-box")

let displayBoxes = document.getElementsByClassName("display-box")

var turn = "X"

function onBoxClick(index){
    return function() {

        
        if (displayBoxes[index].innerHTML == "") {
            displayBoxes[index].innerHTML = turn
            switchPlayer()
        }
        
    }
}

function switchPlayer() {
    console.log(turn)
    if (turn.localeCompare("X") == 0) {
        turn = "O"
    }else {
        
        turn = "X"
    }
}

for (let index = 0; index < displayBoxes.length; index++) {
    playBoxes[index].addEventListener("click", onBoxClick(index))
}




