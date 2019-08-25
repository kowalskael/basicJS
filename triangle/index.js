function isTriangle(a, b, c) {
	return a < b + c && b < c + a && c < a + b;
}

console.log(isTriangle(7, 2, 2));



