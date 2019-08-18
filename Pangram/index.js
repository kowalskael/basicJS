function reverseString(str) {

	const regex = /[a-z]/g;

	return str.toLowerCase().match(regex).sort().reduce((unique, item) => {
		return unique.includes(item) ? unique : [...unique, item] }, []);

}

let result = reverseString('Jackdaws love my big sphinx of quartz');

if (result.length == 26){
	console.log('it is pangram');
} else {
	console.log('it is not pangram');
}

