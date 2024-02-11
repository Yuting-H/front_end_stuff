//constant 1 second = 1000ms
let oneSec = 1000;

let time = document.getElementById("time");

let date = new Date();

function updateTime() {
    time.innerHTML = new Date().getSeconds();
}

updateTime();

setInterval(updateTime, oneSec)