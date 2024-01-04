let count = 0

const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

function incrementCount() {
    count++;
    counter.innerHTML = count;
}

function decrementCount() {
    count --;
    counter.innerHTML = count;
}

incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount)