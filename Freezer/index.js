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

		movingPoints[i] = point;
	}

	function draw() {

		ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing ctx
		ctx.save();

		function drawPoints(point) {
			ctx.fillStyle = point.color;
			ctx.fillRect(point.x, point.y, point.size, point.size);
		}

		function movePoints(point) {
			let direction = Math.floor(Math.random() * 4);

			if (direction === 0 && point.x < canvas.width) {
				point.x += 1;
			}
			if (direction === 1 && point.x > 0) {
				point.x -= 1;
			}
			if (direction === 2 && point.y > 0) {
				point.y -= 1;
			}
			if (direction === 3 && point.y < canvas.height) {
				point.y += 1;
			}
		}

		// rules for segregation
		for ( let a = movingPoints.length - 1; a >= 0; a--) {
			for (let b = frozenPoints.length - 1; b >= 0; b--) {
				if (movingPoints[a].x > canvas.width || movingPoints[a].x < 0
					|| movingPoints[a].y < 0 || movingPoints[a].y > canvas.height) {
					movingPoints.splice(a, 1);
					frozenPoints.splice(0, 0, b);
				}
				let x = Math.abs(movingPoints[a].x - frozenPoints[b].x);
				let y = Math.abs(movingPoints[a].y - frozenPoints[b].y);
				let distance = Math.sqrt(x * x + y * y);

				if (distance < movingPoints[a].size) {
					movingPoints.splice(a, 1);
					frozenPoints.splice(0, 0, a);
				}
			}
		}

		// move and draw Moving
		for ( let i = 0; i < movingPoints.length; i++) {
			movePoints(movingPoints[i]);
			drawPoints(movingPoints[i]);
		}

		// draw Frozen
		for (let j = 0; j < frozenPoints.length; j++ ) {
			frozenPoints[j].color = 'pink';
			drawPoints(frozenPoints[j]);
		}

		ctx.restore();
		window.requestAnimationFrame(draw);
	}

	draw();

};
