const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.changeColors = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      let rifi = randomIntegerFromInterval(min, max);
      refs.body.style.background = colors[rifi];
    }, 1000);
  },

  stop() {
    clearInterval(this.changeColors);
    this.isActive = false;
  },
};

refs.startButton.addEventListener("click", timer.start.bind(timer));
refs.stopButton.addEventListener("click", timer.stop.bind(timer));
