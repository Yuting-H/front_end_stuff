let dino = document.getElementById("dino");

let ground = document.getElementById("ground");

let dinoBox = dino.getBoundingClientRect();

let groundY = ground.getBoundingClientRect().top;

var dino_Y = groundY + dinoBox.height;

dino.style.transform = `translate(100px, ${groundY - dinoBox.height}px)`

window.addEventListener("keydown", (event) => {

    console.table(event);
    
    //if space is pressed
    if(event.key = " ") {
        dino_Y + 10
    }

})