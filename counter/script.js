let count = 0

const counterDisplay = document.getElementById("display");
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