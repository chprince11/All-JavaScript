// Examples of Functions

const calcAge = (birthYear) => { return 2024 - birthYear; } 

const yearUntilRetirement  = (birthYear, firstName) => {
    const retiremnet = 65 - calcAge(birthYear);

    if( retiremnet > 0) {
        return `${firstName} retires in ${retiremnet} years.`;
    } else {
        return -1;
    }
};

console.log(yearUntilRetirement(2002, 'Prince')); // 43 
console.log(yearUntilRetirement(1957, 'Prince')); // -2 // Already retired
console.log(yearUntilRetirement(1957, 'Prince')); // -1 // Already retired


// Arrow function more examples 
const calcAvg = ( firstNumber, secondNumber, thirdNumber ) => { ( firstNumber + secondNumber + thirdNumber ) / 3 };

const scoreDolphins = calcAvg( 44, 23, 71 );
const scoreKoalas = calcAvg( 65, 54, 49 );

const checkWinner = ( avgDolphions, avgKoalas ) => {
    
    if ( avgDolphions >= 2 * avgKoalas ) {
        return (`Dolphins win (${avgDolphions} vs. ${avgKoalas})`);
        
    } else if ( avgKoalas >= 2 * avgDolphions ) {
        return (`Koalas win (${avgKoalas} vs. ${avgDolphions})`);
    } 
    else {
        return (`No team wins...`);
    };
    
};

console.log(checkWinner(scoreDolphins,scoreKoalas));