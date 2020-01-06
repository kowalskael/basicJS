export class Timer {
  timerRAF;

  constructor(container) {
    this.container = container;
  }

  rAFCallback = () => {
    this.count = performance.now();
    this.sec = Math.floor((this.count / 1000)) % 60;
    this.min = Math.floor((this.count / 60000)) % 60;
    this.container.innerText = `${this.min}:${this.sec}`;
    this.timerRAF = requestAnimationFrame(this.rAFCallback);
  };

  start() {
    this.timerRAF = requestAnimationFrame(this.rAFCallback);
  }

  stop() {
    cancelAnimationFrame(this.timerRAF);
  }

  reset() {
    console.log('reset');
  }
}
