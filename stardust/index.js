let capturer;

/*
window.addEventListener('load', function(){
  capturer = new CCapture({ format: 'png' } );

  capturer.start();
  setTimeout(function(){
    capturer.stop();
    capturer.save();
  }, 1500);
});
 */

function init() {
  window.requestAnimationFrame(draw);
}

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

class Point {
  constructor(x, y) {
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

};

let points = [];


for (let i = 0; i < 10000; i++) {
  points[i] = new Point;
}


function draw() {

// gets reference to HTML <canvas>
// <canvas> creates surface for more then one rendering ctx
// actual drawing is done using the CanvasRenderingContext2D

  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
  ctx.save();

  for (let i = 0; i < 10000; i++) {
    points[i].draw();
    points[i].move();
  }


  ctx.restore();
  window.requestAnimationFrame(draw);

  //capturer.capture( canvas );

}


init();



