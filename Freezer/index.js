document.getElementById("sumbit").onclick = function() {

  let isFrozen = 'true';

  const canvas = document.getElementById('canvas');

  canvas.width = document.getElementById("freezer-width").value;
  canvas.height = document.getElementById("freezer-height").value;
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

  let pointsNumber = document.getElementById("freezer-count").value;

  for ( let i = 0; i < pointsNumber; i++) {
    points[i] = new Point();
  }

  function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
    ctx.save();

    for ( let i = 0; i < pointsNumber; i++) {
      points[i].draw();
      points[i].move();

      if (points[i].name === 'freeze') {
        points[i].color = 'red';
      }

      let freezed = points.map(function () {
        return points[i].name === 'freeze'; // zwraca wartość true, a nie element !!
      });

      /*let freezed = points.map(function () {
        return points[i].name === 'freeze';
      });

      let x = Math.abs(points[i].x - freezed[i].x);
      let y = Math.abs(points[i].y - freezed[i].y);

      let distance = Math.sqrt(x * x + y * y);

      if (distance < points[i].width) {

      } else {
        points[i].move();
      }*/
    }

    ctx.restore();
    window.requestAnimationFrame(draw);
  }

  draw();


};

