const startBtn = document.querySelector('.data-start');
const stopBtn = document.querySelector('.data-stop');
let timerId = null;
let themeChanging = false;

// Функція для встановлення початкового стану кнопок
function setInitialButtonState() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Викликаємо функцію при завантаженні сторінки
document.addEventListener('DOMContentLoaded', setInitialButtonState);

startBtn.addEventListener('click', () => {
  if (!themeChanging) {
    themeChanging = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerId = setInterval(() => {
      const randomColor = getRandomHexColor();
      document.querySelector('body').style.backgroundColor = randomColor;
    }, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  themeChanging = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
