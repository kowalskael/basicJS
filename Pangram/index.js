function pangramCheck(str) {

	const regex = /[a-z]/g;

	const result = str.toLowerCase().match(regex).sort().reduce((acc, letter) => {
		return acc.includes(letter) ? acc : [...acc, letter] }, []);

	if (result.length === 26){
		return true;
	}
}

pangramCheck('Jackdaws love my big sphinx of quartz');
