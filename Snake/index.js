const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let scale = 10;
let snake = [];
canvas.width = canvas.height = 21 * (scale + 1);

for (let i = 0; i < canvas.width/scale; i++) {
	for (let j = 0; j < canvas.height/scale; j++) {
		ctx.fillStyle = '#e8daba';
		ctx.fillRect(1 + (i + (scale * i)), 1 + (j + (j * scale)), scale, scale);
	}
}

for (let j = 0; j < 3; j++) {
	let square = { x: 1 + (canvas.width - scale)/2, y: (canvas.width - scale)/2 + (j + (scale * j)), color: 'black'};
	snake.push(square);

	snake[0].color = 'green';

	ctx.fillStyle = snake[j].color;
	ctx.fillRect(snake[j].x, snake[j].y, scale, scale);
}

function move() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
	for (let i = 0; i < canvas.width/scale; i++) {
		for (let j = 0; j < canvas.height/scale; j++) {
			ctx.fillStyle = '#e8daba';
			ctx.fillRect(1 + (i + (scale * i)), 1 + (j + (j * scale)), scale, scale);
		}
	}

	for (let j = 0; j < 3; j++) {
		snake[j].y = snake[j].y - (1 * (scale + 1));
		ctx.fillStyle = snake[j].color;
		ctx.fillRect(snake[j].x, snake[j].y, scale, scale);

		if (snake[j].y - scale < 0) {
			snake[j].y = canvas.height;
		}
	};

}

window.setInterval(move, 1000);

