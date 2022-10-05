'use strict'

/*
// function declaration
function logger() {
    console.log('My name is Jonas')
}

//calling, running or invoking the function
logger()
logger()
logger()

function fruitProcessor (apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)



//function declaration
function calcAge1 (birthYear){
    return 2037 - birthYear
}

const age1 = calcAge1(1991)

//function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear
}
const age2 = calcAge2(1991)

console.log(age1, age2)




//arrow function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    // return retirement
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Brian'))
console.log(yearsUntilRetirement(1980, 'Jonas'))




const mark = {   //an object mark
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){   //calcBMI is a method
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

mark.calcBMI()
john.calcBMI()

console.log(mark.bmi, john.bmi)

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi})is higher than ${john.fullName}'s BMI (${john.bmi})`)
}else if (john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi})is higher than ${mark.fullName}'s BMI (${mark.bmi})`)

}



//loops
//for loop keeps running while condition is true
for (let rep = 1; rep <= 30; rep ++){
    console.log(`lifting weights repetition ${rep}`)
}



const jonas = [
    'Jonas',
    'Omweri',
    2037 - 1991,
    'teacher',
    ['Steve', 'Denno', 'Kevo']
]

for (let i = 0; i < 5 ; i++){
    console.log(jonas[i], typeof jonas[i])
}

const years = [1991, 1996, 2001, 2002]
const ages = []

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
}

console.log(ages)

//continue and break statement

for (let i = 0; i < 5 ; i++){

    if(typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i])
}

for (let i = 0; i < 5 ; i++){

    if(typeof jonas[i] === 'number') break
    console.log(jonas[i], typeof jonas[i])
}




//loop backwards
const jonas = [
    'Jonas',
    'Omweri',
    2037 - 1991,
    'teacher',
    ['Steve', 'Denno', 'Kevo']
]

for(let i = jonas.length - 1; i >= 0; i--){
    console.log(jonas[i])
}

//loops in loops

for(let excercise = 1; excercise < 4; excercise++){
    console.log(`-------- Starting excercise ${excercise}`)

    for (let rep = 1; rep < 6; rep++){
        console.log(`Excercise ${excercise}: lifting weight repetition${rep}`)
    }
}



//while loop

// for (let rep = 1; rep <= 10; rep ++){
//     console.log(`lifting weights repetition ${rep}`)
// }


let rep = 1;
while (rep <=10){
    // console.log(`WHILE: lifting weights repetition ${rep}`)
    rep++
}

let dice = Math.trunc (Math.random() * 6) + 1
console.log(dice)

while (dice !==6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc (Math.random() * 6) + 1
    if (dice === 6 ) console.log( 'loop about to end...')
}



function readingJs (today, nextweek){
    const study = `i will always study js ${today} and ${nextweek}`;
    console.log(readingJs);
    return study;
}



//function declaration
function add (a, b){
    console.log(a + b);
}

add (2, 3);
*/

//function expression
// const add = function (a, b){
//     console.log(a+b);
// }

// add(2,3);

// Arrow functions

// let add = (a, b) => a + b;
// console.log(add(3, 2));

// const great = (a, b) => {
//     if (a > b)
//     return "a is greater than b";
//     else
//     return "a is less than b";
// }
// console.log(great(10, 17));

// function great (){
//     console.log('Hello there');
// }

// great();

function add (a, b){
    console.log (a + b);
}

add(3, 4);
add(2, 9);