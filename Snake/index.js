const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let scale = 10;
canvas.width = canvas.height = 21 * (scale + 1);
let fruit = { x: 1, y: 1 };
let snake = [];

let direction = { x: 0, y: -1 };

function control(e) {
	switch(e.key) {
		case 'ArrowUp':
			direction = { x: 0, y: -1 };
			break;
		case 'ArrowRight':
			direction = { x: 1, y: 0 };
			break;
		case 'ArrowLeft':
			direction = { x: -1, y: 0 };
			break;
		case 'ArrowDown':
			direction = { x: 0, y: 1 };
			break;
	}
}

addEventListener( "keydown", control);

// snake
for (let j = 0; j < 3; j++) {
	let square = { x: 1 + 11 * scale, y: 1 + 11 * scale + (j + (scale * j)), color: '#0cf2b9'};
	snake.push(square);
}

// snake move
function move() {

	ctx.clearRect(0, 0, 21 * (scale + 1), 21 * (scale + 1)); // clearing ctx

	let new0 = {x: snake[0].x + (direction.x * (scale + 1)), y: snake[0].y + (direction.y * (scale + 1)), color: '#0cf2b9'}; // here is place to give variable with chosen key
	snake.unshift(new0);

	// hit detection
	if (snake[0].x === fruit.x && snake[0].y === fruit.y) {
		for (let j = 0; j < snake.length; j++) {
			do {
				fruit.x = 1 + (Math.floor(Math.random() * 21)) * (scale + 1);
				fruit.y = 1 + (Math.floor(Math.random() * 21)) * (scale + 1);
			} while (fruit.x === snake[j].x && fruit.y === snake[j].y);
		}
	} else {
		snake.pop();
	}

	for (let j = 0; j < snake.length; j++) {
		if (snake[j].x < 0) {
			snake[j].x = 1 + 20 * (scale + 1);
		}
		if (snake[j].x > canvas.width) {
			snake[j].x = 1;
		}
		if (snake[j].y < 0) {
			snake[j].y = 1 + 20 * (scale + 1);
		}
		if (snake[j].y > canvas.height) {
			snake[j].y = 1;
		}
		if (snake[0].x === snake[j].x && snake[0].y === snake[j].y) {
			// game over
		}
	}

	for (let i = 0; i < canvas.width/scale; i++) {
		for (let j = 0; j < canvas.height/scale; j++) {
			ctx.fillStyle = '#f5eeda';
			ctx.fillRect(1 + i + scale * i, 1 + (j + (j * scale)), scale, scale);
		}
	}

	for (let j = 0; j < snake.length; j++) {
		snake[0].color = 'black';
		snake[1].color = '#0cf2b9';
		ctx.fillStyle = snake[j].color;
		ctx.fillRect(snake[j].x, snake[j].y, scale, scale);
	}

	ctx.fillStyle = '#ffbf0a';
	ctx.fillRect(fruit.x, fruit.y, scale, scale);
}

setInterval(move, 1000);





