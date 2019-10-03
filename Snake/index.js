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
	let square = { x: 1, y: 1 + (j + (scale * j)), color: 'black'};
	snake.push(square);

	snake[j].x += (canvas.width - scale)/2;
	snake[j].y += (canvas.width - scale)/2;
	snake[0].color = 'green';
}

for (let j = 0; j < 3; j++) { // funkcja która wylicza mi pozyję węża
	ctx.fillStyle = snake[j].color;
	ctx.fillRect(snake[j].x, snake[j].y, scale, scale);
}

