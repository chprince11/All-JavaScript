// *** Arithmetic operators *** ( - , * , / , + )

const now = 2040;
const agePrince = now - 2002;
const ageBisman = now - 2018;
console.log(agePrince, ageBisman); // 38 22

console.log(agePrince * 2, agePrince / 10, 2 ** 3);
//  76 3.8 8
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Prince";
const lastName = "Coder";
console.log(firstName + " " + lastName); // Prince Coder

// *** typeof operator ***
console.log(typeof true); // boolean

// *** Assignment operators *** ( = )
let x = 10 + 5; // 15
x += 10 // x = x + 10 // 25
x -= 10 // x = x - 10 // 15
x *= 2 // x = x * 2 // 30
x /= 2 // x = x / 2 // 15
x++; // x = x + 1 // 16
x--; // x = x - 1 // 15
++x; // 16
--x; // 15

console.log(x); // 15

// *** Comparison operators ***
console.log(agePrince > ageBisman); // true
console.log(agePrince < ageBisman); // false
// >= or  <=

// Operator precedence
// *  >  /  >  +  >  -
// Check this link for the precedence table
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence