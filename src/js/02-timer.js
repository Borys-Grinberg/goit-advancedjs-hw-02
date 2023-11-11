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

document.querySelector('[data-start]').addEventListener('click', () => {
  const inputDate = document.getElementById('datetime-picker').value;
  const targetDate = new Date(inputDate).getTime();
  const timerInterval = 1000;

  const updateTimer = () => {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(timerId);
      iziToast.show({
        title: 'Timer Expired!',
        message: '',
        position: 'topRight',
        timeout: 3000,
        backgroundColor: '#ff5733',
        color: 'white',
      });
      document.querySelector('[data-start]').disabled = false;
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

  updateTimer(); // Викликаємо для оновлення відображення на початку

  const timerId = setInterval(updateTimer, timerInterval);
});

flatpickr('#datetime-picker', {
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
        position: 'topRight',
        timeout: 3000,
        backgroundColor: '#ff5733',
        color: 'white',
      });
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
});
