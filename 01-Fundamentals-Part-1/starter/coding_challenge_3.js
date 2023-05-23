const dolphinsGameOne = 97;
const dolphinsGameTwo = 112;
const dolhpinsGameThree = 101;

const dolphinsTotal = dolphinsGameOne + dolphinsGameTwo + dolhpinsGameThree;
console.log(`Dolphins total: ${dolphinsTotal} points`);

const dolphinsAverage = dolphinsTotal / 3;
console.log(`Dolphins average: ${dolphinsAverage} points`);

// Course solution: const scoreDolphins = (96 + 108 + 89) / 3;

const koalasGameOne = 109;
const koalasGameTwo = 95;
const koalasGameThree = 106;

const koalasTotal = koalasGameOne + koalasGameTwo + koalasGameThree;
console.log(`Koalas Total: ${koalasTotal} points`);

const koalasAverage = koalasTotal / 3;
console.log(`Koalas average: ${koalasAverage} points`);

// Course solution: const scoreKoalas = (88 + 91 + 110) / 3;

// Course solution: console.log(scoreDolphins, scoreKoalas);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('🐬 The DOLPHINS win the tournament! 🐬');
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log('🐨 The KOALAS win the tournament! 🐨');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("⚔️ It's a DRAW... ⚔️");
} else {
    console.log("😥 No one has enough points to WIN the tournament... 😥");
}

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀