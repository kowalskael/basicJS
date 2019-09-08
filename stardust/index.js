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
  }

  move() {
    this.x = canvas.width - this.x + Math.random() ;
    this.y = canvas.height - this.y + Math.random();
  }

  draw() {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

let points = [];

for (let i = 0; i < 500; i++) {
  points[i] = new Point;
}

let count = 0;

setInterval(function counter() {
  console.log(++count);
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  for (let i = 0; i < 500; i++) {
    //points[i].fillStyle = '#' + randomColor;
  }
}, 2000);

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx

  for (let i = 0; i < 500; i++) {
    points[i].draw();
    points[i].move();
  }

  window.requestAnimationFrame(draw);

  //capturer.capture( canvas );
}


init();



