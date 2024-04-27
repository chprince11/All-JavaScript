/*

Ternary Operator/ conditional operator 
- All in one line
- ternary operator is a expression, produces a value
*/
const age = 23;

const drink = age >= 18 ? console.log("I like to drink wine") : console.log("You are under 18 🥲");

console.log(drink); 

// Also put it into template literals because it is expression not statement
console.log(`${age >= 18 ? "I like to drink wine" : "You are under 18 🥲"}`);

