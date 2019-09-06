const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext('2d');

let point = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: 5,
  vy: 2,
  width: 10,
  height: 10,
  color: 'white',
  draw: function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

let points = [];

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
  ctx.save();

  for ( let i = 0; i < 10; i++) {
    point.draw();
  }

  point.x += point.vx;

  if (point.x + point.width > canvas.width || point.x + point.width < 0) {
    point.vx = -point.vx;
  }

  ctx.restore();
  window.requestAnimationFrame(draw);

}

draw();




