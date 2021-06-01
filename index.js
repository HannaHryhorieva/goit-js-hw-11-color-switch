const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector('body');
let colorBody = '';
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onChangeColorBody = function () {
  const indexArr = randomIntegerFromInterval(0, colors.length - 1);
  colorBody = colors[indexArr];
  bodyEl.style.backgroundColor = colorBody;
};

btnStart.addEventListener('click', () => {
  intervalId = setInterval(onChangeColorBody, 1000);
  btnStart.setAttribute('disabled', "disabled")
});

btnStop.addEventListener('click', () => {
  clearInterval(intervalId);
  btnStart.removeAttribute('disabled');
});

