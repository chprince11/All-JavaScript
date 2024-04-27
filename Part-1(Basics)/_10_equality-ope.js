/* 

*** Equality Operators ***

-- === is called strict equality operators.
- It's strict because it does not perform type coercion.
- Return true if both the values are exactly the same
- Will check both value + data type

-- == loose equality operator 
- It does type coercion 
ex: '18' == 18 // true
*/

const age = '22';

if( age === 22 ) 
console.log(`It is a strict equality operator`);
// this will not print in console, because string is not equal to a number

if( age == 22 )
console.log(`It is a loose equality operator`);
// this is print because value 22 are same, it does't care for data types, but in strict it will care for both value + data type

/* 
*** Input from user ***
*/
const newAge = prompt("What's your age ?");
alert(`Your age is ${newAge} and ` + `data type is a `+ typeof(prompt("What's your age ?")) );

/* 
*** Boolean Logic ***
*/

// Truth Table:

// AND -  T T = T
//        T F = F
//        F T = F
//        F F = F

// OR -   T T = T
//        T F = T
//        F T = T
//        F F = F

// Not A, Not B
// Inverts true/false values