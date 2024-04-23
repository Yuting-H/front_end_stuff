let dino = document.getElementById("dino");

let ground = document.getElementById("ground-1");

let dinoBox = dino.getBoundingClientRect();

//get the top of the ground
let groundY = ground.getBoundingClientRect().top;

let jumpHeight = 100;

var onGround = false;

var fallRate = 1;

//X coord of ground offset
var groundOffset = ground.getBoundingClientRect().left;

//the Y coord of dino
var dino_Y = dinoBox.bottom;

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

//updates key releases
window.addEventListener("keyup", (event) => {

  //space released
  if (event.key == " ") {
    keyDowns.jump = false
  }
});

//updates game
function updateGame() {
  console.log(dino_Y);

  //update dino position
  dino.style.transform = `translate(100px, ${dino_Y - dinoBox.height}px)`;

  //Updates position of dino
  //if dino is in air
  if (dino_Y < groundY) {

    //simulate falling using fallrate
    dino_Y = dino_Y + fallRate;
    fallRate = fallRate + 0.1;

    onGround = false;
  } else {
    //if dino touches ground, resets fall rate
    onGround = true;
    dino_Y = groundY
    fallRate = 0;
  }

  //only let dino jumps if dino is on ground and jump is pressed
  if (onGround && keyDowns.jump == true) {
    dino_Y = dino_Y - 100;
  }

  ground.style.transform = `translate(${groundOffset}px, 50vh)`
  groundOffset--;
  if (groundOffset < 0) {
    groundOffset = end
  }
}

//update the game once every 10 ms
setInterval(updateGame, 10);
