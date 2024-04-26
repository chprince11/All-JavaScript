// Let & const are introduced in ES6 ( modern JS )
// var - old way to declare variables

// let 

let age = 30;
age = 31; 
// in let we can reassign a value or mutated the variable
console.log(age);

// const 

const birthYear = 2000;
birthYear = 2002;
console.log(birthYear); 
// So in const we can't change the value later in code
// An immmutable varibales or can't reassigned
// Uncaught TypeError: Assignment to constant variable. 
// const hello; // This will also a error

// var ( old way to declare variables )

var job; // no error with var
// let is block scoped and var is function scoped