let count = 0

const counter = document.getElementById("counter");

const incrementButton = document.getElementById("increment");

function increment() {
    count++;
    counter.innerHTML = count;
    
}

incrementButton.addEventListener("click", increment);