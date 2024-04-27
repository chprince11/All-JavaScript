/* 
There are total 5 falsy values in JS:
- 0, '', undefined, null, NaN

*/
console.log(Boolean(0)); // false ( falsy value )
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean('Prince')); // true ( truthy value )
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean({})); // true 

const money = 0; 
// money = 0 , will execute the if condition.
// money = 1, else condition will run
if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}