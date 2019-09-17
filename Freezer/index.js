let typeofMove = ["up", "down", "left", "right"];

const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext('2d');

class Point {
  constructor() {
    this.name = 'moving';
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.v = 1;
    this.width = 2;
    this.height = 2;
    this.color = 'white';
    this.dir = typeofMove[Math.floor(Math.random() * typeofMove.length)]; // describe which type of movement point is taking
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }


  move() {
    if (this.dir === "right") {
      if (this.x + this.width > canvas.width) {
        this.name = 'freeze';

      } else {
        this.x += this.v;
      }
    }

    if (this.dir === "left") {
      if (this.x - this.width < 0) {
        this.name = 'freeze';

      } else {
        this.x -= this.v;
      }
    }

    if (this.dir === "up") {
      if (this.y - this.height < 0) {
        this.name = 'freeze';

      } else {
        this.y -= this.v;
      }
    }

    if (this.dir === "down") {
      if (this.y + this.height > canvas.height) {
        this.name = 'freeze';

      } else {
        this.y += this.v;
      }
    }
  }

}

let points = [];

for ( let i = 0; i < 700; i++) {
  points[i] = new Point();
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
  ctx.save();

  for ( let i = 0; i < 700; i++) {
    points[i].draw();
    points[i].move();

    for ( let j = 0; j < 700; j++) {
      let x = Math.abs(points[i].x - points[j].x);
      let y = Math.abs(points[i].y - points[j].y);

      let distance = Math.sqrt(x * x + y * y);

      if ( i !== j && distance < points[j].width) {

      }

      if (i !== j && points[i].name === 'freeze') {
          points[i].color = 'red';
      }
    }

  }

  ctx.restore();
  window.requestAnimationFrame(draw);
}

draw();




