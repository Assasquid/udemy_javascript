if (23 > 10) {
    const str = '23 is bigger'; // The string itself is an expression, the whole line is a statement.
    console.log(str);
} // This is a statement, doesn't produce a value, it declares a variable.

console.log(`I'm ${2023 - 1988} years old.`);
// Only an expression can go in the template literal: ${}.

/* ====================
CODE FROM 27: STATEMENTS AND EXPRESSIONS

====================
==================== */


/* ====================
CODE FROM 26: THE SWITCH STATEMENT

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure.');
        console.log('Go to coding meetup.');
        break;
    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day.');
}

// The same logic, written as an if statement:
if (day === 'monday') {
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos.');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples.');
} else if (day === 'friday') {
    console.log('Record videos.');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Not a valid day.');
}

====================
==================== */


/* ====================
CODE FROM 24: LOGICAL OPERATORS

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

====================
==================== */


/* ====================
CODE FROM 22: EQUALITY OPERATORS

const age = 18;
if (age === 18) console.log('You are old enough!');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 18) { //18 === 18
    console.log('Cool! 18 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else if (favourite === 9) {
    console.log('9 is not too bad either!')
} else {
    console.log('Number is not 18 or 7, not even 9...')
}

if (favourite !== 18) console.log('Why not 18?');

====================
==================== */


/* ====================
CODE FROM 21: TRUTHY AND FALSY VALUES

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jerome'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)!");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is UNDEFINED...');
}

====================
==================== */


/* ====================
CODE FROM 20: TYPE CONVERSION AND TYPE COERCION

//TYPE CONVERSION:
const inputYear = '1991';
console.log(typeof inputYear);
console.log(Number(inputYear), inputYear);
//Original value is not yet converted though:
console.log(typeof inputYear);
console.log(inputYear + 18);
//To perform the calculation:
console.log(Number(inputYear) + 18);

//If we try to convert a non number string to a number:
console.log(Number('Jerome'));

console.log(String(23));

//TYPE COERCION:
console.log('I am ' + 34 + ' years old.');
//Here the + operator will automatically convert the 34 number to a string.

console.log('24' - '10' - 3);
// Here it converted the strings to numbers.
// The - operator triggers the opposite conversion.

console.log('Jerome' - '10' - 3);

console.log('34' * '2');
//The numbers as strings will be converted to numbers.

console.log('34' / '2');

let n = '1' + 1;
console.log(n);
//The + 1 has been converted to a string and concatinated.
n = n - 1;
console.log(n);
//The n has beem converted to a number due to the -.

====================
==================== */


/* ====================
CODE FROM 18. TAKING DECISIONS: IF/ELSE STATEMENTS 

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗 !');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😔.`);
}

// if else statement is called a 'control structure'.

const birthYear = 1988;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

====================
==================== */


/* ====================
CODE FROM 17. STRINGS AND TEMPLATE LITERALS 

const firstName = 'Jerome';
const job = 'front end developer';
const birthYear = 1988;
const year = 2037;

const jerome = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jerome);

// Since ES6, tool to handle these complex strings easily: Template literals:
// Use back ticks, thenit works like in Ruby:
const jeromeNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jeromeNew);

// Multiline string before ES6:
console.log('String with \n\
multiple \n\
lines');

// Multiline string with ES6:
console.log(`String with
multiple
lines`);

====================
==================== */


/* ====================
CODE FROM 15. OPERATOR PRECEDENCE

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)
// The two soustractions are executed before the comparison.
// Because JavaScript as a well defined order of operator precedence.
// See mdn*'s precedence table: operator precedence
// *Mozilla Developper Network

// Assignment is done from right to left:
let x, y;
x = y = 25 - 10 - 5; // x = y = 10 -> x = 10.
console.log(x, y);

// Highest precedence: grouping:
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

====================
==================== */


/* ====================
CODE FROM 14. BASIC OPERATORS

// Math operators:
const now = 2037;

const ageJonas = now - 1988;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2.

const firstName = 'Jerome';
const lastName = 'Million-Rousseau';
console.log(firstName + lastName);
// This returns: JeromeMillion-Rousseau

console.log(firstName + ' ' + lastName);
// There is a better way of concatenate these strings: template strings.
// More on that later.

// typeof is also an operator for example.

//Assignment operators:
let x = 10 + 5;
console.log(x);

x += 10;
// x = x + 10;
console.log(x);

x *= 4;
console.log(x);

x++;
// x = x + 1;
console.log(x);

x--;
console.log(x);

// Comparison operators:
console.log(ageJonas > ageSarah);
// This will return true.

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge, typeof isFullAge);

console.log(now - 1991 > now - 2018)

====================
==================== */


/* ====================
CODE FROM 13. LET, CONST AND VAR

// We declare the age variable:
let age = 30;
// We then mutate that variable (reassign a value to that variable):
age = 31;

// Variables that are not supposed to change at any point, can't change:
const birthYear = 1988;
// birthYear = 1990;
// Will return: "Assignment to a constant variable".

// We can't declare an empty const variable.
// const firstName;
// Will return the error "Missing initializer in const declaration".

// Legacy / old way of declaring variables, good to know, to recognise:
var job = 'Programmer';
job = 'Teacher';
// Look similar but below the surface this is different.
// "let" is "block-scoped" and "var" is "function-scoped".
// More on this later.

// Some people say we don't need to declare a variable:
lastName = 'Million-Rousseau'
console.log(lastName);
// It would work but it won't create a variable in the current "scope".
// It creates a property on global object.
// Bad idea. More on this later.

====================
==================== */


/* ====================
CODE FROM 12. DATA TYPES

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
// This will return "object" in the console. This is considered a bug.
// But it's not corrected, for legacy reasons.
// It should return null.

====================
==================== */


/* ====================
CODE FROM 11. VALUES AND VARIABLES

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';
console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
// Make sure variable names are really descriptive like above, avoid examples below:
let job1 = 'Programmer';
let job2 = 'Teacher';

====================
==================== */