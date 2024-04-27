// ** Type conversion **

const inputYear = '1990';
console.log(inputYear + 10); // 199010 ( string )
console.log(parseInt(inputYear) + 10); // 2000 ( number )
console.log(Number(inputYear) + 10, inputYear); // 2000 '1990' ( number )

console.log(Number('Prince')); // NaN ( Not a Number)
console.log(typeof NaN); // number
console.log(String(22)); // 22(String)

// ** Type coercion **
console.log('I am' + 23 + ' years old' ); // Everything is String

console.log('23' - '10' - 3); // 10 ( number )
console.log('23' + '10' + 3); // 23103 ( string )
console.log('5' * '2'); // 10 ( number )
console.log('5' / '2'); // 2.5 ( number )

let n = 'n' + 1;
n = n - 1;
console.log(n); // NaN

let m = '1' + 1; // '11'
m = m - 1; // '11' - 1 = 10
console.log(m); // 10 ( number )