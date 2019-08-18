function PangramCheck(words) {

	const strWords = words.toLowerCase();
	const regex = /[a-z&&ąćęłńóśźż]/g;
	const arrWords = strWords.match(regex).sort();

	const alphabet = ('abcdefghijklmnoprstuwyząćęłńóśźż').split("");

	const objAlphabet = {};
	alphabet.forEach(function(x) {
		objAlphabet[x] = (objAlphabet[x] || 0) + 1;
	});
	console.log('PL litery w alfabecie', objAlphabet);

	const objWords = {};
	arrWords.forEach(function(x) {
		objWords[x] = (objWords[x] || 0) + 1;
	});
	console.log('PL litery w zdaniu', objWords);

	alphabet.map(objAlphabet => Object.keys(objAlphabet));
	arrWords.map(objWords => Object.keys(objWords));

	if (alphabet.length == arrWords.length) {
		console.log('zdanie jest pangramem');
	} else {
		console.log('zdanie nie jest pangramem')
	}
}

PangramCheck('Tchórz w KGB. Sądź płoć! Fajny mężuś i leń');
