/*

**** Arrays in JS ( 1st Data Structure ) ****

- Important DS in JS are Arrays and Objects.
- Arrays: 

*/

// Another way to create an array
const years = new Array(1991, 1984, 2000, 2002);
console.log(years); // (4) [1991, 1984, 2000, 2002]

// Literal Syntax
const friends = ['Prince', 'Bisman', 'Peter', 'Roy'];
console.log(friends);
console.log(friends[0]); // Prince
console.log(friends.length); // 4 
console.log(friends[friends.length - 1 ]); // Roy 
//This will print the last element from an array without counting them
// friends[x] , so x can put any expressions here

friends[2] = "Jay";
// This will replace the element on index 2 means element 3, Peter will no longer now in the friends array
console.log(friends); 

// Can also put an array into array
const prince = ['Prince', 'football', 22, true, friends];
console.log(prince);

//Exercises

const calcTheAge = (birthYear) => { return 2024 - birthYear};

const year = [2002, 1999, 1994, 1974];

console.log(calcTheAge(years));// NAN

const age_1 = (calcTheAge(year[0]));
const age_2 = (calcTheAge(year[1]));
const age_3 = (calcTheAge(year[2]));
const age_4 = (calcTheAge(year[years.length -1]));
console.log(age_1, age_2, age_3, age_4);

const ages = [calcTheAge(year[0]), calcTheAge(year[1]),calcTheAge(year[2]),calcTheAge(year[year.length - 1 ])];
console.log(ages);

