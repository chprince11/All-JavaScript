// Every value in JS either a Object or Primitive 

/*

There are 7 primitive data types in JS:

1) Number: Floating point no. -> Used for decimals and integers 
2) String: Sequence of characters 
3) Boolean: Logical type can only be true or false -> Used for taking decisions
4) Undefined: Value is not defined ( or empty value )
5) Null: Also means empty value
6) Symbol ( ES2015 ): Value that is unique and can't be changed 
7) BigInt ( ES2020 ): Larger integers that the Number type can hold

** JS has dynamic typing: No need to declare the data type, it automatically determine acc.to its value provided. **

*/

// typeof function ( tell us the data type of the particular value provided)

let learningNewConcept = true;
console.log(learningNewConcept); // true
console.log(typeof learningNewConcept); // boolean

console.log(typeof 20); // number
console.log(typeof "prince"); // string

// Dynamic typing in JS

learningNewConcept = false;
console.log(learningNewConcept); // false

let year;
console.log(year); // undefined
console.log(typeof year); // undefined

// This is a bug in JS
console.log(typeof null); // object 
