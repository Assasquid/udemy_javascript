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

==================== */