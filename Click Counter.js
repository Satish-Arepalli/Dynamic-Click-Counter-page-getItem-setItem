let counterValueEl = document.getElementById("counterValue");

let incrementBtnEl = document.getElementById("incrementBtn");

function onIncrementCount() {
    let counterValue = counterValueEl.textContent;
    let updatedValue = parseInt(counterValue) + 1;

    counterValueEl.textContent = updatedValue;
    localStorage.getItem("clickCount", counterValueEl);
    let clickCount = localStorage.getItem("clickCount");
    localStorage.setItem("clickCount", updatedValue);
}