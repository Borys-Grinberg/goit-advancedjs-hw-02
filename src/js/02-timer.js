import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const startBtn = document.querySelector('[data-start]');
const datetimePicker = document.getElementById('datetime-picker');

// Додавання визначення стану кнопки при завантаженні сторінки
startBtn.disabled = true;

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topCenter',
        timeout: 3000,
        backgroundColor: '#ff5733',
        color: 'white',
      });
      startBtn.disabled = true;
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
});

startBtn.addEventListener('click', () => {
  const targetDate = new Date(datetimePicker.value).getTime();
  const timerInterval = 1000;

  startBtn.disabled = true;
  datetimePicker.disabled = true;

  const updateTimer = () => {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(timerId);
      iziToast.show({
        title: 'Timer Expired!',
        message: '',
        position: 'topCenter',
        timeout: 3000,
        backgroundColor: '#ff5733',
        color: 'white',
      });
      startBtn.removeAttribute('disabled');
      datetimePicker.removeAttribute('disabled');
    } else {
      const formattedTime = convertMs(timeDifference);
      document.querySelector('[data-days]').textContent = addLeadingZero(
        formattedTime.days
      );
      document.querySelector('[data-hours]').textContent = addLeadingZero(
        formattedTime.hours
      );
      document.querySelector('[data-minutes]').textContent = addLeadingZero(
        formattedTime.minutes
      );
      document.querySelector('[data-seconds]').textContent = addLeadingZero(
        formattedTime.seconds
      );
    }
  };

  updateTimer();
  const timerId = setInterval(updateTimer, timerInterval);
});
