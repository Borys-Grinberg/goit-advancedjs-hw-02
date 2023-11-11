const startBtn = document.querySelector('.data-start');
const stopBtn = document.querySelector('.data-stop');
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.querySelector('body').style.backgroundColor = randomColor;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}