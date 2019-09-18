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
    this.dir = Math.floor(Math.random() * 4); // describe which type of movement point is taking
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (this.dir === 0) {
      if (this.x + this.width > canvas.width) {
        this.name = 'freeze';

      } else {
        this.x += this.v;
      }
    }

    if (this.dir === 1) {
      if (this.x - this.width < 0) {
        this.name = 'freeze';

      } else {
        this.x -= this.v;
      }
    }

    if (this.dir === 2) {
      if (this.y - this.height < 0) {
        this.name = 'freeze';

      } else {
        this.y -= this.v;
      }
    }

    if (this.dir === 3) {
      if (this.y + this.height > canvas.height) {
        this.name = 'freeze';

      } else {
        this.y += this.v;
      }
    }
  }

}

let points = [];
let freezed = [];

for ( let i = 0; i < 70; i++) {
  points[i] = new Point();
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
  ctx.save();

  for ( let i = 0; i < 70; i++) {
    points[i].draw();
    points[i].move();


    freezed[i] = points.filter(function(state) {
      if (points[i].name === 'freeze') {
        return state;
      }
    });

    freezed[i].color = 'red';

    /* for ( let j = 0; j < 70; j++) {
      let x = Math.abs(points[i].x - points[j].x);
      let y = Math.abs(points[i].y - points[j].y);

      let distance = Math.sqrt(x * x + y * y);

      if ( i !== j && distance < points[j].width) {

      }
    } */

  }

  ctx.restore();
  window.requestAnimationFrame(draw);
}

draw();




