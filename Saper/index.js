document.getElementById("play").style.display = "none";

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
	let objArr = []; // two-dimensional array
	let divContainer = document.getElementById("board"); // variable returning html element

	for (let i = 0; i < rows; i++) { // create array with objects
		objArr[i] = [];
		let row = document.createElement('div');
		divContainer.appendChild(row);
		for (let j = 0; j < columns; j++) {
			let column = document.createElement('div');
			row.appendChild(column);
			column.classList.add('hidden'); // every element with class hidden for start
			column.classList.add('square');
			objArr[i][j] = { fill: 0, state: 'hidden', element: column };
		}
	}

	console.log(objArr);

	// drawing bombs, after 1st click
	function drawBombs() {
		let clickCount = 0;
		return function() { // do drawing for first click, then increase clickCount and 'block' function
			if (clickCount === 0) {
				// losowanie
			}
			clickCount++;
		}
		// wylosowanym obiektom zmień fill: 'bomb'
	}

	divContainer.onclick = drawBombs();

	// objects with numbers
	function flagNumbers() {
		// check objects adjacent to bombs
		// foundNum = sum of all found bombs around
		// if (adjacentObjects[i][j]) have fill: 9, foundNum + foundBomb
		// if(foundNum > 0 && foundNum < 9) object fill: foundNum
	}

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



