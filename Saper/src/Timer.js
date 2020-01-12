export class Timer {
  timerRAF;

  constructor(container) {
    this.container = container;
    this.prevTimeValue = 0;
    this.running = false;
    this.display();
  }

  rAFCallback = () => {
    this.currTimeValue = performance.now();
    this.diffValue = this.currTimeValue - this.prevTimeValue;
    this.display();
    this.timerRAF = requestAnimationFrame(this.rAFCallback);
  }

  display() {
    this.sec = Math.floor((this.diffValue / 1000)) % 60;
    this.min = Math.floor((this.diffValue / 60000)) % 60;
    this.container.innerText = `${this.min ? (this.min > 9 ? this.min : `0${this.min}`) : '00'
    }:${this.sec > 9 ? this.sec : `0${this.sec}`}`;
  }

  start() { // use when submit btn is clicked
    if (!this.running) {
      this.running = true;
      this.timerRAF = requestAnimationFrame(this.rAFCallback);
    }
  }

  stop() { // use when isWin / isLose
    if (this.running) {
      cancelAnimationFrame(this.timerRAF);
      this.running = false;
    }
  }

  restart() { // use on page refresh, or reset btn
    this.prevTimeValue = this.currTimeValue;
  }
}
