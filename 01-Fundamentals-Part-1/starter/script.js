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