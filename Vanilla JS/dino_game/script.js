let dino = document.getElementById("dino");

let ground = document.getElementById("ground");

let dinoBox = dino.getBoundingClientRect();

//get the top of the ground
let groundY = ground.getBoundingClientRect().top;

let jumpHeight = 100;

var onGround = false;

var fallRate = 1;

//the Y coord of dino
var dino_Y = dinoBox.bottom;

dino.style.transform = `translate(100px, ${dino_Y}px)`;

var keyDowns = {
  jump: false,
};

//updates pressed keys
window.addEventListener("keydown", (event) => {

  //if space is pressed
  if (event.key == " ") {
    keyDowns.jump = true;
  }
});

window.addEventListener("keyup", (event) => {

  //space released
  if (event.key == " ") {
    keyDowns.jump = false
  }
});

//update game
function updateGame() {
  console.log(dino_Y);

  //move dino
  dino.style.transform = `translate(100px, ${dino_Y - dinoBox.height}px)`;

  //Updates position of dino
  //if dino is in air
  if (dino_Y < groundY) {
    dino_Y = dino_Y + fallRate;
    fallRate = fallRate + 0.1;
    onGround = false;
  } else {
    onGround = true;
    dino_Y = groundY
    fallRate = 0;
  }

  if (onGround && keyDowns.jump == true) {
    dino_Y = dino_Y - 100;
  }
}

//update the game once every 10 ms
setInterval(updateGame, 10);
