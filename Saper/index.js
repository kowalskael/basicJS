let area = [];

let rows = 10;
let columns = 10;

for (let i = 0; i < rows; i++) {
		area[i] = [];
}

for (let i = 0; i < rows; i++) {
	for (let j = 0; j < columns; j++) {
		area[i][j] = { fill: 0, state: 'hidden' };
	}
}

let seconds = 0;
let minutes = 0;

setInterval(function() {
	document.getElementById("timer").innerHTML = minutes + ' : ' + seconds++;
}, 1000);

console.log(area);

