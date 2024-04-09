let dino = document.getElementById("dino");

let ground = document.getElementById("ground");

let dinoBox = dino.getBoundingClientRect();

let groundY = ground.getBoundingClientRect().top;

let jumpHeight= 100;

var dino_Y = dinoBox.bottom + dinoBox.height;

dino.style.transform = `translate(100px, ${dino_Y}px)`

var keyDowns = {};

window.addEventListener("keydown", (event) => {

    console.table(event.key);
    
    //if space is pressed
    if(event.key == ' ') {
        console.log(dino_Y)
        dino_Y = dino_Y - jumpHeight;
    }
})

//game loop
function updateGame() {
    console.log(dino_Y)
    dino.style.transform = `translate(100px, ${dino_Y - dinoBox.height}px)`;

    if(dino_Y < groundY){
        
        dino_Y++;
    }
}

setInterval(updateGame, 10);