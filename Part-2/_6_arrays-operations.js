/*

*** Operations in an array ***

*/

const friends = ['Prince', 'Bisman', 'Peter'];

friends.push('Roy'); // add an element at the end of an array
console.log(friends);

friends.unshift('John'); // add an element in the beggining of an array
console.log(friends);

friends.pop(); // apposite of an push method, remove the last element
// pop function will not return the length, instead of it will return the the element which is removed from an array
// Roy in this case
console.log(friends);

friends.shift(); // remove th first element
console.log(friends);

console.log(friends.indexOf('Prince'));
console.log(friends.indexOf('Bob')); // -1 ( because the element is not present in an array )

console.log(friends.includes('Prince')); // true
// includes does not do the type coercion '23' != 23

// Exercise

// 1st way to do
const calTip = bill => {

    // let tipCalc;
    
    // if( bill >= 50 && bill <= 300 ) {
    //     tipCalc = ( 15 * bill ) / 100;
    //     return tipCalc;
    // }
    // else {
    //     tipCalc = ( 20 * bill ) / 100;
    //     return tipCalc;
    // }

    // another way
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

};

const bills = [ 125, 555, 44 ];

console.log(`Bills: ${bills}`);

const tips = [ calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];

console.log(bills,tips);

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
];
console.log(`Total bills: ${totals}`);