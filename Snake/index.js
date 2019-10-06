const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let scale = 10;
canvas.width = canvas.height = 21;

let direction = { x: 0, y: -1 };

function control(e) {
	if (e.key === 'ArrowUp') {
		direction = { x: 0, y: -1 };
	}

	if (e.key === 'ArrowRight') {
		direction = { x: 1, y: 0 };
	}

	if (e.key === 'ArrowLeft') {
		direction = { x: -1, y: 0 };
	}

	if (e.key === 'ArrowDown') {
		direction = { x: 0, y: 1 };
	}
}

addEventListener( "keydown", control);

// snake draw
let snake = [];

for (let j = 0; j < 3; j++) {
	let square = { x: canvas.width/2, y: canvas.width/2 + j};
	snake.push(square);

	snake[0].color = 'aquamarine'; // head is different from body
	ctx.fillStyle = 'white';
	ctx.fillRect(snake[j].x, snake[j].y, 1, 1);
}

console.log(snake);

// snake move
function move() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx

	snake.pop();

	let new0 = { x: snake[0].x + direction.x, y: snake[0].y + direction.y }; // here is place to give variable with chosen key
	snake.unshift(new0);

	for (let j = 0; j < 3; j++) {
		if (snake[j].x - 1 < 0) {
			snake[j].x = canvas.width;
		}

		if (snake[j].y - 1 < 0) {
			snake[j].y = canvas.height;
		}

		ctx.fillRect(snake[j].x, snake[j].y, 1, 1);
	}
}


setInterval(move, 1000);

