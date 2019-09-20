document.getElementById("sumbit").onclick = function() {

	const canvas = document.getElementById('canvas');

	canvas.width = document.getElementById("freezer-width").value;
	canvas.height = document.getElementById("freezer-height").value;
	ctx = canvas.getContext('2d');

	let frozenPoints = [];
	let movingPoints = [];

	let pointsNumber = document.getElementById("freezer-count").value;

	for ( let i = 0; i < pointsNumber; i++) {
		let point = {
			state: 'isMoving',
			x: Math.floor(Math.random() * canvas.width),
			y: Math.floor(Math.random() * canvas.height),
			size: 1,
			color: 'white'};

		if (point.state === 'isMoving') {
			movingPoints[i] = point;
		} else {
			frozenPoints[i] = point;
		}
	}

	console.log(movingPoints);
	console.log(frozenPoints);

	function draw() {

		ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
		ctx.save();

		function drawPoint(point) {
			ctx.fillStyle = point.color;
			ctx.fillRect(point.x, point.y, point.size, point.size);
		}

		//zasady przydzielania do tablicy
		for ( let a = movingPoints.length - 1; a >= 0; a--) {
			if (movingPoints[a].x - 1 === canvas.width || movingPoints[a].x + 1 === 0
				|| movingPoints[a].y + 1 === 0 || movingPoints[a].y - 1 === canvas.height) {
				movingPoints.splice(a, 1);
				frozenPoints.splice(0, 0, a);
			}

			/*
			let x = Math.abs(points[i].x - freezed[i].x);
			let y = Math.abs(points[i].y - freezed[i].y);
			let distance = Math.sqrt(x * x + y * y);
			if (distance < points[i].width) {
			}
			*/
		}

		//move
		for ( let i = movingPoints.length - 1; i >= 0 ; i--) {

			let direction = Math.floor(Math.random() * 4);

			if (direction === 0 && movingPoints[i].state === 'isMoving') {
				movingPoints[i].x = movingPoints[i].x + 1;
			}
			if (direction === 1 && movingPoints[i].state === 'isMoving') {
				movingPoints[i].x = movingPoints[i].x - 1;
			}
			if (direction === 2 && movingPoints[i].state === 'isMoving') {
				movingPoints[i].y = movingPoints[i].y - 1;
			}
			if (direction === 3 && movingPoints[i].state === 'isMoving') {
				movingPoints[i].y = movingPoints[i].y + 1;
			}
		}

		//draw
		for (let j = 0; j < movingPoints.length; j++ ) {
			drawPoint(movingPoints[j]);
		}

		//draw
		for (let k = 0; k < frozenPoints.length; k++ ) {
			frozenPoints[k].color = 'red';
			drawPoint(frozenPoints[k]);
		}

		ctx.restore();
		window.requestAnimationFrame(draw);
	}

	draw();

};



