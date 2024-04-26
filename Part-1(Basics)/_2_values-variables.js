// *** JS-Values-Variables ***

// Value is basically a piece of data or the smallest unit of information that we have in JS.
// We can store them into variables.
// It is a box into which we can store a value, so we give that box a name

/*
 * This is
 * multi line
 * comments in JS
 */

// This is single line comment in JS

// console.log("prince")  
//Both single and double quotes are correct in JS and semicolon is optional, but putting semicolon is a good pratice.
console.log('prince'); // prince
console.log(23); // 23
console.log(2 + 8 + 0 + 10); // 20

let firstName = "Prince"; // Declaring a varibale
console.log(firstName); // Prince

firstName = "abc"; // now the value is no longer Prince
let lastName = "def";
// Concatenate String 
console.log(firstName + ' ' + lastName); // abc def

// * Varibale Naming convention *

/* 
✅Always use camelCaseConvention, ex: firstName, also use first_name ( Usually used In Ruby )
 - Varibale name only conatine numbers, letters, underscores or the dollar sign ($)
 - let $firstName = "Hello World!";
 - Variable name must be descriptive ( Meaning to something)
 ex: 
 let myFirstJob = "Server";
 let currentJob = "Full Stack Developer";
// Avoid this way to declare the variables name
let job1 = "Server";
let job2 = "Full Stack Developer";

*/

/*
❌ Aviod these variables name 
- 3firstName - Invalid can't start with a number, 
- let 3age = 20; // Uncaught SyntaxError: Invalid or unexpected token
- Error: No reserved keywords for variable name, can use name keywords but some case it will show error
- Don't use let FirstName = "prince"; // because is a like how we define the class name in OOPs in JS.
- let PI = 3.14; // For constant variable we sue all letter to uppercase

*/
