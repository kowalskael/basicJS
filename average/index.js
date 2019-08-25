function getAverage(marks) {
	return Math.floor(marks.reduce((acc, value) => acc + value) / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));



