let nextTime = 1000;

function init() {
  window.requestAnimationFrame(animate);
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
    this.x = canvas.width - this.x + Math.random() ;
    this.y = canvas.height - this.y + Math.random();
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  stop() {
    this.x = this.x;
    this.y = this.y;
  }

};

let points = [];

for (let i = 0; i < 1000; i++) {
  points[i] = new Point();
}

function draw(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
  for (let i = 0; i < 1000; i++) {
    points[i].draw();
  }
}

let loop = setInterval(function() {
  animate();
  window.requestAnimationFrame(animate);
}, 80);

function animate(time) {
  draw();
  for (let i = 0; i < 1000; i++) {
    if (time > nextTime && time < 1500) {
      points[i].stop();
    } else {
      points[i].move();
    }
  }
}

init();





