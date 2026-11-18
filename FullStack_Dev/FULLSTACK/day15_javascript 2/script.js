const studentName = "Deeven";

let mathematics = 85;
let science = 90;
let computerscience = 95;

let total = mathematics + science + computerscience;

let average = total / 3;

let passed = mathematics >= 35 &&
			 science >= 35 &&
			 computerscience >= 35;

console.log("Student:", studentName);
console.log("Total:", total);
console.log("Average:", average);
console.log("Passed:", passed);

let total_two = total % 2;

console.log(total_two == "0");

console.log(total_two === "0");

let age = 22;
let birthYear = 2005;

console.log(age+birthYear,birthYear-age,birthYear*age,birthYear/age);
console.log(47%5);
let points = 100;
points+=25;

let age2=18;
console.log(age2>=18);

console.log(age==25 || age2 ==18);
console.log(!age2>=18);

