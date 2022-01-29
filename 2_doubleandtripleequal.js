let a = 10;
let b = 10;
const ex1 = (a == b);
const ex2 = (a === b);

let c = 5;
let d = '5';
const ex3 = (c == d);
const ex4 = (c === d);

console.log(ex1,ex2,ex3,ex4);

// the === only equals values of its type
// the == equals values of its type and also equals the number and string if both has the same value in it.
// eg: 1 == 1 ,1 == '1'