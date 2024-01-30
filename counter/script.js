let count = 0

const counterDisplay = document.getElementById("display");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

function incrementCount() {
    count++;
    counterDisplay.innerHTML = count;
}

function decrementCount() {
    count --;
    counterDisplay.innerHTML = count;
}

incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount)