const matchArrays = (v, r) => v.filter(e => r.indexOf(e) > -1).length;

console.log(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));



