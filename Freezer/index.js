let typeofMove = ["up", "down", "left", "right"];
let chosenType = typeofMove[Math.floor(Math.random() * typeofMove.length)];
console.log(chosenType);

const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext('2d');

class Point {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.v = 1;
    this.width = 5;
    this.height = 5;
    this.color = 'white';
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
      if (chosenType == "right") {
        this.x += this.v;
        if (this.x - this.width < 0) {
          this.x = 0;
        }
        if (this.x + this.width > canvas.width) {
          this.x = canvas.width - this.width;
        }
      } else {

      }
    }

}

let points = [];

for ( let i = 0; i < 10; i++) {
  points[i] = new Point();
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
  ctx.save();

  for ( let i = 0; i < 10; i++) {
    points[i].draw();
    points[i].move();
  }

  ctx.restore();
  window.requestAnimationFrame(draw);

}

draw();




