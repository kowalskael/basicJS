function removeDuplicateWords (s) {
	return s.split(' ').reduce((acc, letter) => {
		return acc.includes(letter) ? acc : [...acc, letter] }, []).join(' ');
}

console.log(removeDuplicateWords('This is an this is example!'));



