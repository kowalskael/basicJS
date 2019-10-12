const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let scale = 10;
canvas.width = canvas.height = 21 * scale;

let fruit = { x: 1, y: 1 };

let snake = [];
for (let j = 0; j < 3; j++) {
	snake.push( { x: 11, y: 11 + j } );
}

let intervalMove;
let direction = { x: 0, y: -1 };

// snake move
function move() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	snake.unshift({x: snake[0].x + direction.x, y: snake[0].y + direction.y});

	// walls detection
	for (let j = 0; j < snake.length; j++) {
		if (snake[j].x < 0) snake[j].x = 20;
		if (snake[j].x > 20) snake[j].x = 0;
		if (snake[j].y < 0) snake[j].y = 20;
		if (snake[j].y > 20) snake[j].y = 0;
	}

	// fruit detection && position randomization
	if (snake[0].x === fruit.x && snake[0].y === fruit.y) {
		do { fruit.x = fruit.y = Math.floor(Math.random() * 21);
		} while (snake.find(obj => obj.x === fruit.x && obj.y === fruit.y ));
	} else {
		snake.pop();
	}

	// snake body hit detection
	for (let j = 1; j < snake.length; j++) {
		if (snake[0].x === snake[j].x && snake[0].y === snake[j].y) {
			clearInterval(intervalMove);
		}
	}

	// snake draw
	for (let j = 0; j < snake.length; j++) {
		ctx.fillStyle = j === 0 ? 'white' : 'black';
		ctx.fillRect(snake[j].x * scale, snake[j].y * scale, scale, scale);
	}

	// fruit draw
	ctx.fillStyle = '#EA244A';
	ctx.fillRect(fruit.x * scale, fruit.y * scale, scale, scale);
}

intervalMove = setInterval(move, 500);


// keyboard events && direction detection
addEventListener( "keydown", function(e) {
	switch(e.key) {
		case 'ArrowUp':
			if( direction.y !== 1) { direction = { x: 0, y: -1 }; }
			break;
		case 'ArrowRight':
			if( direction.x !== -1) { direction = {x: 1, y: 0 }; }
			break;
		case 'ArrowLeft':
			if( direction.x !== 1) { direction = {x: -1, y: 0 }; }
			break;
		case 'ArrowDown':
			if(direction.y !== -1) { direction = { x: 0, y: 1 }; }
			break;
	}
});












