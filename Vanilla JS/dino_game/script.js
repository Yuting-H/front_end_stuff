let dino = document.getElementById("dino");

let ground = document.getElementById("ground");

let dinoBox = dino.getBoundingClientRect();

let groundY = ground.getBoundingClientRect().top;

let jumpHeight = 100;

var dino_Y = dinoBox.bottom;

dino.style.transform = `translate(100px, ${dino_Y}px)`;

var keyDowns = {
  jump: false,
};

window.addEventListener("keydown", (event) => {
  console.table(event.key);

  //if space is pressed
  if (event.key == " ") {
    console.log(dino_Y);
    dino_Y = dino_Y - jumpHeight;
  }
});

window.addEventListener("keyup", (event) => {});

//game loop
function updateGame() {
  console.log(dino_Y);
  dino.style.transform = `translate(100px, ${dino_Y - dinoBox.height}px)`;

  //Updates position of dino
  if (dino_Y < groundY) {
    dino_Y++;
  }
}

setInterval(updateGame, 10);
