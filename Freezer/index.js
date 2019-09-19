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

	console.log(frozenPoints);
	console.log(movingPoints);

	function drawPoint(point) {
		ctx.fillStyle = point.color;
		ctx.fillRect(point.x, point.y, point.size, point.size);
	}

	function draw() {

		ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
		ctx.save();

		for ( let i = 0; i < pointsNumber; i++) {

			let direction = Math.floor(Math.random() * 4);

			// zasady przerzucania obiektów między tablicami && przerzucanie
			if (movingPoints[i].x + movingPoints[i].width > canvas.width || movingPoints[i].x - movingPoints[i].width < 0
				|| movingPoints[i].y - movingPoints[i].height < 0 || movingPoints[i].y + movingPoints[i].height > canvas.height) {
				frozenPoints.push(movingPoints[i]);
			} else {
				// niech punkty wrócą do tablicy frozenPoints
			}

			// move zgodnie z wylosowanym kierunkiem ruchu
			if (direction === 0) {
				movingPoints[i].x = movingPoints[i].x + 1;
			}
			if (direction === 1) {
				movingPoints[i].x = movingPoints[i].x - 1;
			}
			if (direction === 2) {
				movingPoints[i].y = movingPoints[i].y - 1;
			}
			if (direction === 3) {
				movingPoints[i].y = movingPoints[i].y + 1;
			}
			drawPoint(movingPoints[i]);
		}

		for ( let j = 0; j < frozenPoints.length; j++) {

		}


			/*

			let freezed = points.map(function () {
				return points[i].name === 'freeze';
			});

			let x = Math.abs(points[i].x - freezed[i].x);
			let y = Math.abs(points[i].y - freezed[i].y);

			let distance = Math.sqrt(x * x + y * y);

			if (distance < points[i].width) {

			} else {
				points[i].move();
			}*/

		ctx.restore();
		window.requestAnimationFrame(draw);
	}

	draw();

	console.log(frozenPoints);


};

