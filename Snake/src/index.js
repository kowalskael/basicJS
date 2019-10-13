import * as THREE from 'three';

const canvas = document.getElementById('canvas');

const camera = new THREE.PerspectiveCamera(10, 2, 0.1, 1000);
camera.position.set(0, 0, 5);

let scale = 10;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); // canvas

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x333333);

let fruit = { x: 1, y: 1 };

let snake = [];
for (let j = 0; j < 3; j++) {
	snake.push( { x: 11, y: 11 + j } );
}

let intervalMove;
let direction = { x: 0, y: -1 };
let justChanged = true;

// snake move
function move() {

	justChanged = false;
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

	draw();
}

function draw() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);

	// snake draw
	for (let j = 0; j < snake.length; j++) {
		// ctx.fillStyle = j === 0 ? 'white' : 'black';
		// ctx.fillRect(snake[j].x * scale, snake[j].y * scale, scale, scale);
	}

	// fruit draw
	// ctx.fillStyle = '#EA244A';
	// ctx.fillRect(fruit.x * scale, fruit.y * scale, scale, scale);
}

intervalMove = setInterval(move, 1000);

// keyboard events && direction detection
addEventListener( "keydown", e => { switch(e.key) {
	case 'ArrowUp':
		if ( direction.y !== 1 && justChanged === false ) {
			justChanged = true;
			direction = {x: 0, y: -1};
		}
		break;
	case 'ArrowRight':
		if ( direction.x !== -1 && justChanged === false ) {
			justChanged = true;
			direction = {x: 1, y: 0};
		}
		break;
	case 'ArrowLeft':
		if ( direction.x !== 1 && justChanged === false ) {
			justChanged = true;
			direction = {x: -1, y: 0};
		}
		break;
	case 'ArrowDown':
		if ( direction.y !== -1 && justChanged === false ) {
			justChanged = true;
			direction = {x: 0, y: 1};
		}
		break;
}});












