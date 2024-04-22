let timeDisplay = document.getElementById("time")

var seconds = 0;

function updateTime() {
    seconds++
    timeDisplay.innerHTML = `Time: ${seconds}`;
}

setInterval(updateTime, 1000)