const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let scale = 10;
canvas.width = canvas.height = 21 * (scale + 1);

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

// snake draw
let snake = [];

for (let j = 0; j < 3; j++) {
	let square = { x: 1 + 11 * scale, y: 11 * scale + (j + (scale * j)), color: 'white'};
	snake.push(square);

	snake[0].color = 'green'; // head is different from body
	ctx.fillStyle = snake[j].color;
	ctx.fillRect(snake[j].x, snake[j].y, scale, scale);
}

// snake move
function move() {
	ctx.clearRect(0, 0, 21 * (scale + 1), 21 * (scale + 1)); // clearing ctx
	snake.pop();


	let new0 = { x: snake[0].x + (direction.x * (scale + 1)), y: snake[0].y + (direction.y * (scale + 1))}; // here is place to give variable with chosen key
	snake.unshift(new0);

	for (let j = 0; j < 3; j++) {
		if (snake[j].x < 0) {
			snake[j].x = 20 * (scale + 1);
		}
		if (snake[j].x > canvas.width) {
			snake[j].x = 0;
		}
		if (snake[j].y < 0) {
			snake[j].y = 20 * (scale + 1);
		}
		if (snake[j].y > canvas.height) {
			snake[j].y = 0;
		}

		snake[0].color = 'green';
		ctx.fillStyle = 'white';
		ctx.fillRect(snake[j].x, snake[j].y, scale, scale);
	}
}


setInterval(move, 1000);

