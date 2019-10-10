const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let scale = 10;
canvas.width = canvas.height = 21 * scale;

let fruit = { x: 1, y: 1 };

let snake = [];
for (let j = 0; j < 3; j++) {
	let square = { x: 11, y: 11 + j, color: 'black'};
	snake.push(square);
}

let intervalMove;
let direction = { x: 0, y: -1 };

// snake move
function move() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	let newHead = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
	snake.unshift(newHead);

	// hit detection
	if (snake[0].x === fruit.x && snake[0].y === fruit.y) {
		for (let j = 0; j < snake.length; j++) {
			do {
				fruit.x = (Math.floor(Math.random() * 21));
				fruit.y = (Math.floor(Math.random() * 21));
			} while (fruit.x === snake[j].x && fruit.y === snake[j].y);
		}
	} else {
		snake.pop();
	}

	for (let j = 0; j < snake.length; j++) {
		if (snake[j].x < 0) {
			snake[j].x = 20;
		}
		if (snake[j].x > 20) {
			snake[j].x = 0;
		}
		if (snake[j].y < 0) {
			snake[j].y = 20;
		}
		if (snake[j].y > 20) {
			snake[j].y = 0;
		}
	}

	for (let j = 1; j < snake.length; j++) {
		if (snake[0].x === snake[j].x && snake[0].y === snake[j].y) {
			clearInterval(intervalMove);
		}
	}

	snake[0].color = 'white';
	ctx.fillStyle = snake[0].color;
	ctx.fillRect(snake[0].x * scale, snake[0].y * scale, scale, scale);

	for (let j = 1; j < snake.length; j++) {
		snake[1].color = 'black';
		ctx.fillStyle = snake[j].color;
		ctx.fillRect(snake[j].x * scale, snake[j].y * scale, scale, scale);
	}

	ctx.fillStyle = '#EA244A';
	ctx.fillRect(fruit.x * scale, fruit.y * scale, scale, scale);
}

intervalMove = setInterval(move, 500);

addEventListener( "keydown", function(e) {
	switch(e.key) {
		case 'ArrowUp':
			if( direction.y !== 1) {
				direction = { x: 0, y: -1 };
			}
			break;
		case 'ArrowRight':
			if( direction.x !== -1) {
				direction = {x: 1, y: 0};
			}
			break;
		case 'ArrowLeft':
			if( direction.x !== 1) {
				direction = {x: -1, y: 0};
			}
			break;
		case 'ArrowDown':
			if(direction.y !== -1) {
				direction = { x: 0, y: 1 };
			}
			break;
	}
});












