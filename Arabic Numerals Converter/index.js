function romanize(num) {

let numerals = {M: 1000, CM: 900, D: 500, CD: 400, C: 100,
	XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

let roman = '';
let i;

	for (i in numerals) {
		while (num >= numerals[i]) {
			roman += i;
			num -= numerals[i];
			console.log(num)
		}
	}
	return roman;
}

romanize('3578');
console.log(romanize('3578'))
