let isMoving = true;

function init() {
  window.requestAnimationFrame(draw);
}

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

class Point {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 2;
    this.height = 2;
    this.color = 'white';
  }

  move() {
    if (isMoving) {

    } else {
      this.x = canvas.width - this.x + Math.random();
      this.y = canvas.height - this.y + Math.random();
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

let points = [];

for (let i = 0; i < 5000; i++) {
  points[i] = new Point();
}

setInterval( () => {
  setTimeout(() => { isMoving = false }, 1000);
  setTimeout(() => { isMoving = true }, 2000);
}, 2000);


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx

  for (let i = 0; i < 5000; i++) {
      points[i].draw();
      points[i].move();
  }

  window.requestAnimationFrame(draw);
}

init();







