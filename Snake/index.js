const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let scale = 10;
canvas.width = canvas.height = 21;

// directions
let left = { x: -1, y: 0 }; let right = { x: 1, y: 0 }; let up = { x: 0, y: -1 }; let down = { x: 0, y: 1 };

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

	let new0 = { x: snake[0].x + up.x, y: snake[0].y + up.y }; // here is place to give variable with chosen keys
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

