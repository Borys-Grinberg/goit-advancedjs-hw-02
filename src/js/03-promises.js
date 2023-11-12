import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const firstDelay = parseInt(formData.get('delay'));
    const delayStep = parseInt(formData.get('step'));
    const amount = parseInt(formData.get('amount'));

    for (let i = 0; i < amount; i++) {
      createPromise(i + 1, firstDelay + i * delayStep)
        .then(({ position, delay }) => {
          iziToast.success({
            title: 'Fulfilled',
            message: `Promise ${position} fulfilled in ${delay}ms`,
            position: 'topRight',
          });
        })
        .catch(({ position, delay }) => {
          iziToast.error({
            title: 'Rejected',
            message: `Promise ${position} rejected in ${delay}ms`,
            position: 'topRight',
          });
        });
    }
  });

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
});
