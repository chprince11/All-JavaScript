/*
**** Objects DS in JS**** 
 */

// Creating a object
const prince = 
{
    firstName: "Prince",
    lastName: "abc",
    age: 22,
    job: "Student",
    friends: ['John', 'Roy', 'Peter']
};

console.log(prince);
console.log(prince.age); // 22

// Dot vs. Bracket Notation

// Dot Notation

console.log(prince.lastName); // abc

// Bracket Notation
// Can put any expression

console.log(prince['lastName']); // abc

const nameKey = 'Name';
console.log(prince['first' + nameKey]); // Prince
console.log(prince['last' + nameKey]); // abc

// const input = prompt('What do you want to know about Prince? Choose between firstName, lastName, age, job, and friends');
// console.log(prince.input);  // undefined 

/*
if(prince[input]) {
    console.log(prince[input]); 
} else {
    console.log('Wrong request! What do you want to know about Prince? Choose between firstName, lastName, age, job, and friends');
}
*/

// Same but using ternary operator
// prince[input] ? console.log(prince[input]) :  console.log('Wrong request! What do you want to know about Prince? Choose between firstName, lastName, age, job, and friends');

// add new properties to an object

prince.location = 'India'; // dot notation
prince['facebook'] = 'abc@facebook.com'; // bracket notation
console.log(prince);


// Challenge
// Print this into console
// "Prince has 3 friends, and his best friend is called John."
// Please no hard coding

// Dot notation
console.log(`${prince.firstName} has ${prince.friends.length} friends, and his best friend is called ${prince.friends[0]}.`);

//Bracket notation
console.log(`${prince['firstName']} has ${prince['friends'].length} friends, and his best friend is called ${prince['friends'].shift()}.`);
