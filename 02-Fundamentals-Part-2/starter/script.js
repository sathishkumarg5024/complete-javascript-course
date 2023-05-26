//strict mode
"use strict"; // to activate strict mode for the entire code, we can also activate the strict mode to particular functions al well.
// to avoid accidental errors/bugs
// it forbids us to do certain things and second it creates visible errors in the developer console.
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) console.log("I can Drive");

const interface = "Audio"; //reserved key word error

const private = 575; // reserved


// Functions

// declaration
function logger() {
  console.log(`My Name is Sathish Kumar G`);
}

//calling , running ,invoking Function
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const juice = fruitProcessor(2, 5);
console.log(juice);

const appleOrangeJuice = fruitProcessor(2, 8);
console.log(appleOrangeJuice);

const num = Number("23");

const age1 = calcAge(2003);
function calcAge(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2004);
console.log(age1, age2);

// Arrow functions

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires on ${retirement} years`;
};

console.log(yearsUntilRetirement(2003, "Sathish"));
console.log(yearsUntilRetirement(2008, "sarah"));

// function calling other functions

function cutFruitPieces(fruit) {
  return 4 * fruit;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 5));

// three types of function
// function declaration - function that can be used before it is declared
function calcAge(birthYear) {
  return 2037 - birthYear;
}
// function expression - essentially a function value stored in a variable
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
// arrow function - great for a quick one-line functions.has no this keyword.
const calcAge = (birthYear) => 2037 - birthYear;


// Coding Challenge -1

const avg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let teamDolphins = avg(44, 23, 71);
let teamKoalas = avg(65, 54, 49);

function checkWinner(teamDolphins, teamKoalas) {
  if (teamDolphins >= 2 * teamKoalas) {
    console.log(`teamDolphins wins (${teamDolphins} vs ${teamKoalas})`);
    return teamDolphins;
  } else if (teamKoalas > 2 * teamDolphins) {
    console.log(`teamKoalas wins (${teamKoalas} vs ${teamDolphins})`);
    return teamKoalas;
  } else {
    console.log("no one wins");
    return -1;
  }
}
let Winner = checkWinner(teamDolphins, teamKoalas);
console.log(Winner);

teamDolphins = avg(85, 54, 41);
teamKoalas = avg(23, 34, 27);

Winner = checkWinner(teamDolphins, teamKoalas);
console.log(Winner);


// Arrays

const friend1 = "Micheal";
const friend2 = "Steven";
const friend = "peter";

const friends = ["micheal", "steven", "peter"]; // method 1
console.log(friends);

const years = new Array(1991, 1984, 2003, 2020); // method 2
console.log(years);

console.log(friends[0]);
console.log(years[2]);
console.log(friends.length);
console.log(years.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

// const used on primitive values are immutable and not applicable for non- primitive values

const firstName = "Sathish Kumar";
const sathish = new Array(firstName, "G", 2003, "Coder", friends);
console.log(sathish);
console.log(sathish.length);
console.log(sathish[sathish.length - 1][2]);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);


// Array Methods

const friends = ["micheal", "steven", "peter"];
const newLength = friends.push("jay"); // push returns the length of the new array
console.log(friends);
console.log(friends.length);
console.log(newLength);

const newLength2 = friends.unshift("john"); // unshift is an array method to add the elements to the beginning of the array
console.log(friends);
console.log(newLength2); // even it returns the length of the new array
// remove elements from array

const popped = friends.pop(); // removes the last element of the array
// and it return the removed element from the array
console.log(popped);

friends.shift(); // remove the first element in the array returns the removed element
console.log(friends);

console.log(friends.indexOf("steven"));
console.log(friends.indexOf("bob")); // returns -1 if the element is not found in the array

// modern version of indexOf is updated in es6 which is includes()
console.log(friends.includes("steven")); // returns true if found uses strict equality method
console.log(friends.includes("bob")); // returns false;

friends.push("23");
console.log(friends.includes(23)); // returns false because it does strict equality and not loose
console.log(friends);

if (friends.includes("peter")) {
  console.log("You have a friend called peter");
}



/////////////////////////
// Coding challenge - 2

const bill = new Array(125, 555, 44);
const tipCalc = function (bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};
const tips = new Array(tipCalc(bill[0]), tipCalc(bill[1]), tipCalc(bill[2]));

const totalAmount = new Array(
  bill[0] + tips[0],
  bill[1] + tips[1],
  bill[2] + tips[2]
);
console.log(bill, tips, totalAmount);



// Objects
// key value pair

const sathish = {
  firstName: "Sathish Kumar", // property firstName with value Sathish Kumar
  lastName: "G", // property lastName with value G
  age: 2037 - 2003,
  job: "Coder",
  friends: ["Micheal", "Peter", "Steven"],
};
// arrays for more ordered data and objects for more unordered data
console.log(sathish);

//Dot Notation

console.log(sathish.lastName);
console.log(sathish["firstName"]);

const nameKey = "Name";
console.log(sathish["first" + nameKey]);
console.log(sathish["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Sathish ? Choose between firstName , lastName,age,job,and friends"
);

if (sathish[interestedIn]) {
  console.log(sathish[interestedIn]);
} else {
  console.log("Invalid property entered");
}

sathish.location = "India";
sathish["github"] = "@sathishkumarg5024";
console.log(sathish);

//Challenge

const person = {
  name: "Sathish Kumar G",
  noOfFriends: 3,
  bestFriend: "Micheal",
  friends: ["Micheal", "Steven", "Peter"],
};
console.log(
  `${person["name"]} has ${person["noOfFriends"]} friends, and his best friend is called ${person["bestFriend"]}`
);

console.log(
  `${sathish.firstName} has ${sathish.friends.length} friends , and his best friend is called ${sathish.friends[0]}`
);



const sathish = {
  firstName: "Sathish Kumar",
  lastName: "G",
  birthYear: 2003,
  job: "Coder",
  friends: ["Micheal", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} ${
      this.lastName
    } is a ${this.calcAge()}-year old ${sathish.job}, and he has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license.`;
  },
};

console.log(sathish.calcAge(2003));
console.log(sathish.age);
console.log(sathish.age);
console.log(sathish.age);
// console.log(sathish["calcAge"](2003));

// Challenge

console.log(sathish.getSummary());


// Coding Challenge - 3

const person1 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const person2 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (person1.calcBMI() > person2.calcBMI()) {
  console.log(
    `${person1.fullName}'s BMI (${person1.BMI}) is higher than ${person2.fullName} (${person2.BMI}) !!`
  );
} else {
  console.log(
    `${person2.fullName}'s BMI (${person2.BMI}) is higher than ${person1.fullName} (${person1.BMI}) !!`
  );
}


// LOOPS

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const sathishArray = [
  "Sathish",
  "Kumar G",
  "Coder",
  ["Micheal", "Peter", "Steven"],
];

const types = new Array();
for (let i = 0; i < sathishArray.length; i++) {
  console.log(sathishArray[i], typeof sathishArray[i]);
  types[i] = typeof sathishArray[i];
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and break

const sathishArray = [
  "Sathish",
  35,
  "Kumar G",
  "Coder",
  ["Micheal", "Peter", "Steven"],
];
for (let i = 0; i < sathishArray.length; i++) {
  if (typeof sathishArray[i] !== "string") continue;
  console.log(sathishArray[i], typeof sathishArray[i]);
}
for (let i = 0; i < sathishArray.length; i++) {
  if (typeof sathishArray[i] == "number") break;
  console.log(sathishArray[i], typeof sathishArray[i]);
}


// reverse looping
const sathishArray = [
  "Sathish",
  35,
  "Kumar G",
  "Coder",
  ["Micheal", "Peter", "Steven"],
];

for (let i = sathishArray.length - 1; i >= 0; i--) {
  console.log(i, sathishArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`===========Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
  }
}


// While loop

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is  about to end...");
}

*/

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = new Array();
const totals = new Array();
const calcTip = function (bills) {
  return bills <= 300 && bills >= 50 ? 0.15 * bills : 0.2 * bills;
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

console.log(tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const averageTotal = calcAverage(totals);
console.log(`Average is ${averageTotal}`);
const averageTip = calcAverage(tips);
