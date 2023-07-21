function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString(`pt-BR`, {
        hour12: false,
        timeZone: `UTC`
    });
}

const clock = document.querySelector(`#timer h2`);
const startBtn = document.querySelector(`#start`);
const pauseBtn = document.querySelector(`#pause`);
const resetBtn = document.querySelector(`#reset`);

let seconds = 0;
let timer;

function startTimer() {
    timer = setInterval(function () {
        seconds++;
        clock.textContent = getTimeFromSeconds(seconds);
    }, 1000)
}

startBtn.addEventListener(`click`, function(event) {
    clearInterval(timer);
    clock.classList.remove(`active`);
    startTimer()
});

pauseBtn.addEventListener(`click`, function(event) {
    clearInterval(timer);
    clock.classList.add(`active`);
});

resetBtn.addEventListener(`click`, function(event) {
    clearInterval(timer);
    clock.classList.remove(`active`);
    clock.textContent = `00:00:00`;
    seconds = 0;
});