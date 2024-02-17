let player = document.getElementById("player");

let playerWidth = player.getBoundingClientRect().width;

let playerHeight = player.getBoundingClientRect().height

var maxWidth = window.innerWidth;

var maxheight = window.innerHeight;

var xPos = 0;

var yPos = 0;

var speed = 5;

//records which key is pressed
var keyDowns = {
    w: false,
    a: false,
    s: false,
    d: false
}

let attributeWindow = document.getElementById("player-attribute");
 
player.addEventListener("mouseenter", (event) => {
    attributeWindow.style.opacity = 100;
})

player.addEventListener("mouseleave", (event) => {
    attributeWindow.style.opacity = 0
})

window.addEventListener("keydown", (event) => {
    
    switch (event.key) {
        case "w":
            keyDowns.w = true;
            break;
        case "a" :
            keyDowns.a = true;
            break;
        case "s":
            keyDowns.s = true;
            break;
        case "d": 
            keyDowns.d = true;
            break;

        default:
            break;
    }

    
})

window.addEventListener("keyup", (event) => {
    
    switch (event.key) {
        case "w":
            keyDowns.w = false;
            break;
        case "a" :
            keyDowns.a = false;
            break;
        case "s":
            keyDowns.s = false;
            break;
        case "d": 
            keyDowns.d = false;

        default:
            break;
    }
})

function gameLoop() {

    //determines which keys are pressed
    if(keyDowns.w == true) {
        yPos = yPos - 1*speed;
    }
    if(keyDowns.a == true) {
        xPos = xPos - 1*speed;
    }
    if(keyDowns.s == true) {
        yPos = yPos + 1*speed;
    }
    if(keyDowns.d == true) {
        xPos = xPos + 1*speed;
    }

    if (xPos > maxWidth - playerWidth) {
        xPos = xPos -1 * speed;
    }
    if (xPos < 0) {
        xPos = xPos + 1 *speed;
    }
    if (yPos > maxheight - playerHeight) {
        yPos = yPos - 1 * speed;
    }
    if (yPos < 0) {
        yPos = yPos + 1 * speed;
    }

    //moves the player
    player.style.transform = `translate(${xPos}px, ${yPos}px)`
}

setInterval(gameLoop, 10)