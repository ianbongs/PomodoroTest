import './style.css';

let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let timeLeft = 25 * 60;
let timerId = null;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (timerId === null) {
    timerId = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        console.log("tick")
        updateDisplay();
      } else {
        clearInterval(timerId);
        timerId = null;
        alert("Time's up!");
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = 25 * 60;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
