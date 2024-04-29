// Object Methods
// objects can hold objects inside objects
// Also add a function inside the object
// Any function is attched to any object then it is called the method

const prince = 
{
    firstName: 'Prince',
    lastName: 'abc',
    birthYear: 2002,
    job: 'Student',
    friends: ['John', 'Roy', 'Peter'],
    masteredOneProgrammingLan: true,

    // calcAge: function(birthYear) {
    //     return 2024 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this); // the prince object
    //     return 2024 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    // " Prince is a 22-year old student, and he mastered a/no programming language."
    challengeAccepted: function() {
        return `${this.firstName} is a ${2024 - this.birthYear}-year old ${this.job}, and he mastered ${this.masteredOneProgrammingLan ? 'a' : 'no'} programming language.`
    }
};

console.log(prince.calcAge(2002)); // 22
console.log(prince.calcAge()); // 22

// Bracket notation
console.log(prince['calcAge'](2002)); // 22

// 3rd way ( most efficient solution )
console.log(prince.age);
console.log(prince.age);
console.log(prince.age);


// Challenge
// " Prince is a 22-year old student, and he mastered a/no programming language."
console.log(prince.challengeAccepted());


// Challeneg-2

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function() {
        this.bmi = ( this.mass / (this.height * this.height) );
        return this.bmi;
    }
    
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    
     calcBMI: function() {
        this.bmi = ( this.mass / (this.height * this.height) );
        return this.bmi;
    }
    
};

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi ) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}


