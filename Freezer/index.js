const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// gets reference to HTML <canvas>
// <canvas> creates surface for more then one rendering ctx

const ctx = canvas.getContext('2d'); // gets element context, rendering context, to draw actually on canvas


// actual drawing is done using the CanvasRenderingContext2D
ctx.clearRect(0, 0, 800, 600); // clearing ctx

ctx.fillStyle = 'green';
ctx.fillRect(100, 100, 150, 100);

function draw() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ', 0)';
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}

draw();
