function init() {
  window.requestAnimationFrame(draw);
}

function draw() {
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');

// gets reference to HTML <canvas>
// <canvas> creates surface for more then one rendering ctx

// actual drawing is done using the CanvasRenderingContext2D
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
  ctx.save();
  ctx.translate(400, 400);

  for ( i = 0; i < 50000; i++) {
    let time = new Date();

    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(10, 0);
    ctx.fillStyle = 'white';
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
  }

  ctx.restore();
  window.requestAnimationFrame(draw);
}

init();


