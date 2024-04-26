// *** Template-literals ***

const firstName = "Prince";
const job = "Student";
const birthYear = 2002;
const year = 2037 - birthYear;

const prince = "I'm " + firstName + ', a ' + year + " years old " + job + " !";
console.log(prince);

// Template literals
const newPrince = `I'm ${firstName}, a ${year} years old ${job} !`;
console.log(newPrince);

console.log(`String with\n\
mutiple \n\
lines
`);

console.log(`String with
mutiple
lines
`);
//Both have same output in the console