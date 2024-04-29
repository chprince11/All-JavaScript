// Loops
// Loop helps us to automate repetitive tasks, tasks we have to perform over and over again.

// This is not a good pratice
// console.log('Lifting weights repetition 1 ');
// console.log('Lifting weights repetition 2 ');
// console.log('Lifting weights repetition 3 ');
// console.log('Lifting weights repetition 4 ');
// console.log('Lifting weights repetition 5 ');

// console.log('');

// For loop which has a counter

for ( let rep = 1; rep <= 5; rep++  ) { 
    console.log(`Lifting weights repetition ${rep}`);
}

console.log('');

// reverse loop
for ( let rep = 5; rep >= 1; rep--  ) { 
    // console.log(`Lifting weights repetition ${rep}`);
}

// Looping Arrays, Beaking, Continuing

const princeArray = [

    'Prince',
    'Abc',
    2024 - 2002,
    'student',
    ['Roy', 'Peter', 'Steven'],
    true

];

const types = [];

for ( let i = 0; i < princeArray.length ; i++  ) {
    // Reading from princeArray arrays
    console.log(princeArray[i] , typeof princeArray[i]);
    
    // Filling types array
    // types[i] = typeof princeArray[i]; // same result
    types.push(typeof princeArray[i]);   // same result
}

console.log(types);


// More examples

const years = [1991, 2007, 1969, 2020];
const ages = [];

for( let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}
console.log(ages); // (4) [33, 17, 55, 4]

// Continue and Break

// Continue
console.log('--- ONLY STRINGS ---');

for ( let i = 0; i < princeArray.length ; i++  ) {

    if(typeof princeArray[i] !== 'string') continue;
    console.log(princeArray[i] , typeof princeArray[i]);

}

// Break ( complete terminate from the loop )
console.log('--- BREAK WITH NUMBER ---');

for ( let i = 0; i < princeArray.length ; i++  ) {

    if(typeof princeArray[i] === 'number') break;
    console.log(princeArray[i] , typeof princeArray[i]);

}

console.log(" ****** Looping backwards ******");
//  Looping backwards & Loops in loops

const princeArray2 = [

    'Prince',
    'Abc',
    2024 - 2002,
    'student',
    ['Roy', 'Peter', 'Steven'],
    true

];

// reversing the array
for(let i = princeArray2.length - 1; i >= 0 ; i-- ) {
    console.log(i, princeArray2[i]);
}

// loop inside a loop

for ( let exercise = 1; exercise <= 3; exercise++ ) {
    console.log(`--------Starting exercise ${exercise}`);

    for( let rep =1; rep <= 5; rep ++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

console.log("--------- WHILE LOOP -----------");
// While loop
// more versatile than for loop
// do not need a counter
// just need a condition

let rep = 1;
while( rep <=10 ) {
console.log(`Lifting weight repetition ${rep}`);
rep ++;
};

// Example does not depend on counter

let dice = Math.trunc(Math.random() * 6) + 1; // Between 1 to 6
console.log(dice);

while ( dice !== 6 ) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if( dice === 6 ) console.log('Loop is about to end ...');
};

// Challenge

const bills = [22,295,176,440,37,105,10,1100,86,52];

const tips = [];
const totals = [];

const calcTip = function (bill) {

  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  
}

for ( let i = 0; i < bills.length - 1 ; i++) {
    
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
    
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for( let i=0; i< arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
    // console.log(sum);
};


console.log(calcAverage([2,3,7]) ); // 12 
// 4 
console.log(Math.trunc(calcAverage(totals)));
console.log(Math.trunc(calcAverage(tips)));

