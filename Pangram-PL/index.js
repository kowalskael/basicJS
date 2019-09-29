function pangramCheck(str) {

	const regex = /[a-z&&ąćęłńóśżź]/g;

	const checkPangram = str.toLowerCase().match(regex).sort().reduce((acc, letter) => {
		return acc.includes(letter) ? acc : [...acc, letter]}, []);

	const countLetter = str.toLowerCase().match(regex).sort().reduce((str, index) => {
			str[index] = (str[index] || 0) + 1;
			return str;
		} , {});

	console.log(countLetter);

	if (checkPangram.length === 32){
		return true;
	}
}

pangramCheck('Dość gróźb fuzją, klnę, pych i małżeństw!');
