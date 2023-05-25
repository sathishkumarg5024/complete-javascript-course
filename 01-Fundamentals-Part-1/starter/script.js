/* let js = "amazing";
console.log(100 - 18);

console.log("Sathish");
console.log(23);

let firstName = "Sathish";
console.log(firstName);

// identifiers can contain only numbers alphabets and underscore
// it shouldn't start with numbers or special characters except $

let $function = "22";
// let new = 'sathish';
// new is a reserved keywprd

// generally we do not name the identifier starting with an upper case, it is used only in case of constructor functions

// real constants should be named in all CAPS
let PI = 3.14;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

// use the first method to give identifier names
console.log(myFirstJob);

//Assignment
var country = "India";
var continent = "Asia";
var population = "too much";

console.log(
  "I live in " +
    country +
    " Which belongs to the " +
    continent +
    "n continent " +
    "whose population is " +
    population
);


// typeof operator
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "sathish");

//DYNAMIC TYPING

javaScriptIsFun = "YES!!";
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

//undefined is when you have an un-initialized variable
let year;
console.log(year);
console.log(typeof year);

year = 2023;

console.log(typeof null);
// it says type of null is an object but it is a bug, not resolved for ages :)



// uses of let
let age = 30;
age = 31;
// we mutated the variable / we updated the value of the variable
// when we need to declare a var and initialize it later we use let
let year;

//const
const birthYear = 2003;
// const is an immutable variable
// we cannot leave the var after declaring we have to initialize
const job = 0; // will give error

// var
var newJob = "programmer";
newJob = "teacher";

//let is block scoped var is function scoped

// no need to have the var keyword

firstName = "Sathish";
console.log(firstName);
// but its a bad practice of not having the keyword



//operator - allows us to tranform values and combine the values
// mathematical / arithmetic operation

const now = 2037;
const ageSathish = now - 2003;
console.log(ageSathish);

console.log(ageSathish * 2, ageSathish / 2, 2 ** ageSathish);

const firstName = "Sathish";
const middleName = "Kumar";
const lastName = "G";

console.log(
  "my name is " + firstName + " " + middleName + " " + lastName + "."
);

//Assignment operators
let x = 10 + 5;
// + operator is executed before the assignment operator
console.log(x);

x += 10; // x= x+10;
console.log(x);

x *= 4;
console.log(x);

x /= 3;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

//comparison operators are used to provide a boolean result

console.log(ageSathish === 15);
// not equal equal exact equal greater than equal greater same to lower

const isFullAge = ageSathish >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageSathish = now - 2003;
const ageSarah = now - 2008;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //steps => x=y=10 , y=10,then x=y .
console.log(x, y);

const averageAge = (ageSarah + ageSathish) / 2;
console.log(ageSathish, ageSarah, averageAge);

///////////////////////////////////////
//Coding Challenge - 1

const MarkWeight = 78;
const MarkHeight = 1.69;
const JohnWeight = 95;
const JohnHeight = 1.76;

function BMI(weight, height) {
  var Bmi = weight / height ** 2;
  return Bmi;
}

const markBmi = BMI(MarkWeight, MarkHeight);
const johnBmi = BMI(JohnWeight, JohnHeight);
const markHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBMI);



const firstName = "Sathish";
const job = "Trader";
const birthYear = 2003;
const year = 2023;

const sathish =
  "I'm " + firstName + ", a " + (year - birthYear) + " years  old " + job + "!";
console.log(sathish);

//Template Strings / literal

const sathishNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !!`;

console.log(sathishNew);

console.log(`Just a regular string...`);

// to write a multiline string before es6

console.log(
  "String with \n\
multiple \n\
lines"
);

//using template strings

console.log(`String 
multiple
lines`);



const age = 18;
if (age > 0) {
  const isOldEnough = age >= 18;
  if (isOldEnough) console.log(`You can apply for driving license`);
  else
    console.log(
      `You have ${18 - age} Years left to apply for driving license!!`
    );
} else console.log("invalid age!!");

const birthYear = 2003;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

///////////////////////////////////

// coding challenge 2

const MarkWeight = 78;
const MarkHeight = 1.69;
const JohnWeight = 95;
const JohnHeight = 1.76;

function BMI(weight, height) {
  var Bmi = weight / height ** 2;
  return Bmi;
}

const markBmi = BMI(MarkWeight, MarkHeight);
const johnBmi = BMI(JohnWeight, JohnHeight);

if (markBmi > johnBmi)
  console.log(`mark's BMI ${markBmi} is higher than john's BMI ${johnBmi}`);
else console.log(`john's BMI ${johnBmi} is higher than mark's BMI ${markBmi}`);



// type conversion and type coercion
// type conversion is manually done by us
// type coercion is done by js automatically

const inputYear = "2003";
console.log(inputYear + 20); // 200320 assumes everything as string

//type conversion

console.log(Number(inputYear) + 20); // 2023

console.log(Number("Sathish")); //NaN - means invalid number

console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + "years old"); // + operator triggers a coercion to string
console.log("23" - "10" - 3); // 10 js converts the string to numbers the - operator triggers a opposite conversion string to number
console.log("23" + "10" + 3); //23103
console.log("23" * "2"); //46 // multiplication triggers a string to number coercion

console.log("23" / "23"); //1 // same as multiplication

let n = "1" + 1;
n = n - 1;
console.log(n);

// truthy and falsy values

// in js there are 5 falsy values 0,'',undefined,null,NaN
// when we try to convert them to boolean they become false - falsy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean({})); // empty objects are truthy value
console.log(Boolean("Sathish")); // non - empty strings are truthy values

const money = 100;
if (money) {
  console.log("Don't sped it all :)");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("height is defined ");
} else {
  console.log("height is Undefined");
}


// equality operator

const age = 18;
if (age === 18) {
  console.log("You just became an adult");
}
// strict equal === it does not perform type coercion and returns true only if the two values are exactly equal
// double equal (loose equality operator)== it does perform type coercion and returns true if the values after type coercion are equal

// loose equality operator
const year = "2003";
if (year == 2003) {
  console.log("it a loose equality operator");
}

const favorite = Number(prompt("What's your favorite number ? "));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) console.log("Cool! 23 is an amazing number!");
else if (favorite === 7) console.log("7 is also a cool number");
else if (favorite === 9) console.log("9 is also a cool number");
else console.log("number is not 23 or 7 or 9");

// different operator

// loose different operator != which does type coercion
// strict different operator !== which does not perform type coercion
if (favorite !== 23) console.log("Why not 23?");


// Basic boolean logical operator AND , OR , NOT operator

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("someone else should drive");
// }

const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah can drive ..");
} else {
  console.log("someone else should drive..");
}


////////////////////////////////

// Coding Challenge - 3

const teamAMatch1 = 97;
const teamAMatch2 = 88;
const teamAMatch3 = 77;

const teamBMatch1 = 44;
const teamBMatch2 = 95;
const teamBMatch3 = 18;

function Calc(match1, match2, match3) {
  return (match1 + match2 + match3) / 3;
}

const teamAAverage = Calc(teamAMatch1, teamAMatch2, teamAMatch3);
const teamBAverage = Calc(teamBMatch1, teamBMatch2, teamBMatch3);
console.log(teamAAverage, teamBAverage);
if (teamAAverage > teamBAverage && teamAAverage >= 100)
  console.log("Team A wins !!");
else if (teamAAverage < teamBAverage && teamBAverage >= 100)
  console.log("Team B wins!!");
else if (teamAAverage === teamBAverage && teamAAverage >= 100)
  console.log("Its a draw !!");
else {
  console.log("no team won !!");
}


// Switch Statement// switch statement always does a strict equality
const day = "monday";
switch (day) {
  case "monday": // compare using strict equality. day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend ");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") console.log("Prepare theory Videos");
else if (day === "wednesday" || day === "thursday") {
  console.log("Write code example");
} else if (day === "friday") console.log("Record videos");
else if (day === "saturday" || day === "sunday")
  console.log("Enjoy the weekeds");
else {
  console.log("invalid day");
}


// Statement and Expression

// expression is a piece of code which produces a value
// 3+4
//1991
// true && false

//Statement - it does not produce a value on itself
if (23 > 10) {
  const str = "23 is bigger";
}

console.log(` I'm ${2037 - 1991} years old.`);



//Conditional operator

const age = 23;
age >= 18
  ? console.log("i like to drink wine")
  : console.log("i like to drink water");

// operator produces a value therefore operator is an expression

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

console.log(` I like to drink ${age >= 18 ? "wine" : "water"}`);


///////////////////
// Coding challenge -4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
const totalValue = bill + tip;

console.log(
  `The bill was ${bill} , the tip was ${tip} and the total value is ${totalValue}`
);

*/
