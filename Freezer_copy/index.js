document.getElementById("sumbit").onclick = function() {

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
      this.dir = Math.floor(Math.random() * 4);
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
      if (this.dir === 0) {
        if (this.x + this.width > canvas.width) {
          this.name = 'freeze';
        }
      }

      if (this.dir === 1) {
        if (this.x - this.width < 0) {
          this.name = 'freeze';
        }
      }

      if (this.dir === 2) {
        if (this.y - this.height < 0) {
          this.name = 'freeze';
        }
      }

      if (this.dir === 3) {
        if (this.y + this.height > canvas.height) {
          this.name = 'freeze';
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

      if (points[i].dir === 0) {
        if (points[i].x + points[i].width > canvas.width) {

        } else {
          points[i].x += points[i].v;
        }
      }

        if (points[i].dir === 1) {
          if (points[i].x - points[i].width < 0) {
          } else {
            points[i].x -= points[i].v;
          }
        }

        if (points[i].dir === 2) {
          if (points[i].y - points[i].height < 0) {
          } else {
            points[i].y -= points[i].v;
          }
        }

        if (points[i].dir === 3) {
          if (points[i].y + points[i].height > canvas.height) {
          } else {
            points[i].y += points[i].v;
          }
        }

    }

    ctx.restore();
    window.requestAnimationFrame(draw);
  }

  draw();


};

