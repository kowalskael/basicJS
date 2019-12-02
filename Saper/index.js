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
	const square = { fill: 0, state: 'hidden', x: 1, y: 1 }; // object with parameters about Saper squares

	let divContainer = document.getElementById("board"); // variable returning html element

	for (let i = 0; i < rows; i++) { // create array with objects
		objArr[i] = [];
		let row = document.createElement('div');
		divContainer.appendChild(row);
		for (let j = 0; j < columns; j++) {
			objArr[i][j] = square;
			let column = document.createElement('div');
			row.appendChild(column);
			column.setAttribute("class", 'hidden square'); // every element with class hidden for start
		}
	}

	// drawing bombs, after 1st click
	function drawBombs() {
		// losowanie i z dwu-wymiarowej tablicy objArr
		// losowanie j z dwu-wymiarowej tablicy objArr
		// bombs[i][j] to wylosowane [i] + [j] z objArr
		// wylosowanym obiektom zmień fill: 'bomb'
	}

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
		
	}

	// select all div's in board
	let squareDivs = document.querySelectorAll('div.square');
	console.log(squareDivs);

	//  bind object square fill & state to individual div


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



