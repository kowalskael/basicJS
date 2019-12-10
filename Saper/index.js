document.getElementById("play").style.display = "none";
let objArr = [];
document.getElementById("submit").onclick = function() {

	document.getElementById("start").style.display = "none"; // saper menu hidden
	document.getElementById("play").style.display = "block"; // show play area

	// TIMER
	let time = document.getElementById("timer"); // refer to timer element

	let seconds = 0; let minutes = 0;

	function add() { // update numbers in timer
		seconds++;
		if(seconds >= 60) {
			minutes++;
			seconds = 0;
			if(minutes >= 60) {
				// end of game
			}
		}

		time.textContent = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00')
			+ ':' + (seconds > 9 ? seconds : '0' + seconds);

		timer();
	}

	function timer() {
		setTimeout(add, 1000); // call function every 1s
	}

	timer();

	// PLAY
	let rows = document.getElementById("width").value;
	let columns = document.getElementById("height").value;
	let bombNums = document.getElementById("bombNums").value;

	// create Array with objects
	 // two-dimensional array
	let divContainer = document.getElementById("board"); // variable returning html element

	for (let row = 0; row < rows; row++) { // create array with objects
		objArr[row] = [];
		let rowDiv = document.createElement('div');
		divContainer.appendChild(rowDiv);
		for (let col = 0; col < columns; col++) {
			let columnDiv = document.createElement('div');
			rowDiv.appendChild(columnDiv);
			columnDiv.classList.add('hidden'); // every element with class hidden for start
			columnDiv.classList.add('square');
			objArr[row][col] = { fill: 0, state: 'hidden', element: columnDiv };
		}
	}

	// drawing bombs, after 1st click
	function drawBombs() { // do drawing for first click, then increase clickCount and 'block' function
		let clickCount = 0;
		return function(e) {
			if (clickCount === 0) {
				for (let row = 0; row < objArr.length; row++) {
					for (let col = 0; col < objArr[row].length; col++) {
						if ( objArr[row][col].element === e.target) {
							objArr[row][col].state = 'revealed';
						}
					}
				}

				let loopCount = 0;

				do {
					let row = Math.floor(Math.random() * objArr.length);
					let col = Math.floor(Math.random() * objArr[row].length);
					objArr[row][col].fill = 9;
					loopCount++;
				} while ( loopCount < bombNums );
			}

			clickCount++;
		}
	}

	divContainer.onclick = drawBombs();

	// objects with numbers
	function flagNumbers() {

		let checkId = [ // array for checking id
			{x: -1, y: -1}, {x: -1, y: 0}, {x: -1, y: +1},
			{x: 0, y: -1}, {x: 0, y: +1},
			{x: +1, y: -1}, {x: +1, y: 0}, {x: +1, y: +1}];

		for (let row = 0; row < objArr.length; row++) {
			for (let col = 0; col < objArr[row].length; col++) {

				let bombCount = 0;
				if ( objArr[row][col].fill === 9) continue;

					for (let check = 0; check < checkId.length; check++) { // dla każdego elementu z checkId

						const dir = checkId[check];
						if (row + dir.x >= 0 && row + dir.x < objArr.length && col + dir.y >= 0 && col + dir.y < objArr[row].length)  // pola do sprawdzenia, występujące w tabicy
							if ( objArr[row + dir.x][col + dir.y] === 9)
								bombCount += 1;
					}

					objArr[row][col].fill = bombCount;
				}
			}
	}

	flagNumbers();

	console.log(objArr);

	// flagging squares
	function flagObject() {
		// if object with state: 'hidden' is clicked with right button of the mouse
		// change object state: 'flagged'
		// if object with state: 'flagged' is clicked with left button of the mouse
		// change object state: 'hidden'

	}

	// revealing objects
	function revealObject() {
		// if object.state: 'hidden' onclick change state: 'revealed'
		//
	}

	/*// change class on the every div that is clicked
	for(let i = 0; i < squareDivs.length; i++) {
		squareDivs[i].onclick = function() {
			// change fill or state of object
		};
		squareDivs[i].ondblclick = function() {
			// change fill or state of object
		}
	}
	*/
};



