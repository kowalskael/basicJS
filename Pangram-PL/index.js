function pangramCheck(str) {

	const regex = /[a-z&&ąćęłńóśżź]/g;

	function check() {
		const checkPangram = str.toLowerCase().match(regex).sort().reduce((acc, letter) => {
			return acc.includes(letter) ? acc : [...acc, letter]}, []);

		if (checkPangram.length == 32){
			console.log('it is pangram');
		} else {
			console.log('it is not pangram');
		}
		return checkPangram;
	}

	check();

	function count() {
		const countLetter = str.toLowerCase().match(regex).sort().reduce((str, index) => {
			str[index] = (str[index] || 0) + 1;
			return str;
		} , {});

		return countLetter;
	};

	console.log(count());

}

pangramCheck('Dość gróźb fuzją, klnę, pych i małżeństw!');



