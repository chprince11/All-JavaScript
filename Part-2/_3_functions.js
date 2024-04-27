/*

*** Functions ***

- A function is simply a piece of code that we can reuse over and over agin in our code.
- Also receive and return data back.
- Follows the DRY principle ( Do not Repeat Yourself )
- Functions are just a values can store into variables, they are not statements

*/

function logger() {
    // function body
    console.log('My name is Prince!');
};

// invoking or running or calling the function 
// logger(); 
logger(); // As many times we can call the funciton


// ** Functions with parameters ** 

// apples and oranges are called parameters
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

const appleJuice = fruitProcessor(5, 0);
// 5 and 0 are called arguments means the actual values.
console.log(appleJuice);

// console.log(fruitProcessor(5, 0));

// ** Functions declaration VS expressions  ** 

console.log(" *** Topic: Functions declaration VS expressions *** ");

// function declaration

function calcAge1(birthYear) {
    // const age = 2024 - birthYear;
    // return age;
    return 2024 - birthYear; 
};

// console.log(`You are`, calcAge1(2009), `years old.`);
const age1 = calcAge1(2009);
console.log(`You are ${(age1)} years old.`);

// function expressions or anonymous function ( Function without a name )

const calcAge2 = function (birthYear) {
    return 2024 - birthYear; 
};

const age2 = calcAge2(2009);
console.log(`You are ${(age2)} years old.`);

// Big difference 

// - In function declaration we can call the function before defining the function, but with expression functions we can't do so.

/*  ( ES6 )
*** Arrow functions ***
*/

// Function expression
// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear; 
// };

// Arrow Function
// - Do not get a this keyword
console.log(" *** Topic: Arrow Functions *** ");
const calcAge3 = birthYear => 2024 - birthYear;

const age3 = calcAge3(2009); 
console.log(`You are ${(age3)} years old.`);

// With more parameters

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    // console.log(age);
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(2002,'Prince'));

/*

Function calling another Functions

*/
console.log(" *** Topic: Function calling another Functions *** ");

const cutPieces = function (fruit) {
    return fruit * 4;
};

const fruitProcessor2 = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};

console.log(fruitProcessor2(2,3));
