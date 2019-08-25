function flattenAndSort(array) {
	return array.reduce((acc, val) => acc.concat(val), []).sort(function(a, b) { return a > b ? 1 : -1});
}

console.log(flattenAndSort([[3, 2], [], [3, 6], [ 4, 5, 6, 7]]));


