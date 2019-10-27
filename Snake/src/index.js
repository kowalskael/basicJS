import * as THREE from 'three';

// canvas
const canvas = document.getElementById('canvas');
let scale = 10;

// camera
const camera = new THREE.PerspectiveCamera(75, 1, 1, 1500);
camera.position.set( 110, 110, 150);
camera.rotation.set(0, 0, 0);

// renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); // canvas
renderer.setSize(21 * scale, 21 * scale);

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xD4D4D4);

// lights
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(-5, 1, 1);
scene.add(light);

const material = new THREE.MeshBasicMaterial(0xFFFFFF);
const geometry = new THREE.BoxGeometry(scale, scale, scale);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const fruitMesh = new THREE.Mesh(geometry, material);
scene.add(fruitMesh);

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

	let snakeMesh = [];

	// draw
	if (snakeMesh.length <= snake.length) {
		do { snakeMesh.push(mesh);
		}
		while ( snakeMesh.length !== snake.length);
	}

	// animate
	for (let i = 0; i < snakeMesh.length; i++) {
		snakeMesh[i].position.x = snake[i].x * scale;
		snakeMesh[i].position.y = snake[i].y * scale;
	}

	// fruit draw
	fruitMesh.position.x = fruit.x * scale;
	fruitMesh.position.y = fruit.y * scale;

	renderer.render(scene, camera);

}

intervalMove = setInterval(move, 1000);

// keyboard events && direction detection
addEventListener( "keydown", e => { switch(e.key) {
	case 'ArrowUp':
		if ( direction.y !== -1 && justChanged === false ) {
			justChanged = true;
			direction = {x: 0, y: 1};
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
		if ( direction.y !== 1 && justChanged === false ) {
			justChanged = true;
			direction = {x: 0, y: -1};
		}
		break;
}});












