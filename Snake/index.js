const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let scale = 10;
canvas.width = canvas.height = 21 * scale;

let snake = [];

// plane ma wypełniać całość planszy
// fruit ma być elementem planszy, który się odznacza ? zmienia status ?
// snake również ma byc elementem planszy

function draw() {
	for (let i = 0; i < canvas.width/scale; i++) {
		for (let j = 0; j < canvas.height/scale; j++) {
			ctx.fillStyle = 'white';
			ctx.fillRect(1 + (i + (scale * i)), 1 + (j + (j * scale)), scale, scale);
		}
	}
}

setInterval(draw, 3000);

