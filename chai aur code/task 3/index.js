// Activity 1:if-else statements
//task 1
let a = "-1747";
if (0 === a) {
    console.log("Zero");
}
else if (0 < a) {
    console.log("positive");
}
else if (0 > a) {
    console.log("negative");
}
else {
    console.log("that is not a number!");
}

//task 2
let age = 18
if (age >= 18) {
    console.log("You are an adult!");
}
else {
    console.log("You are a child!");
}
//Activity 2: Nested If-Else statement
//task 3
let x = 15;
let y = 74;
let z = 53;

if (x > y && x > z ) {
    console.log("x is greater");
}
else if (y > x && y > z ) {
    console.log("y is greater");
}
else{
    console.log("z is greater");
}


// Activity 3:switch case
//task 4
let dayName = 0;

switch (dayName) {
    case 0:
        console.log("Today is Monday");
        break;
    case 1:
        console.log("Today is Tuesday");
        break;
    case 2:
        console.log("Today is Wednesday");
        break;
    case 3:
        console.log("Today is Thursday");
        break;
    case 4:
        console.log("Today is Friday");
        break;
    case 5:
        console.log("Today is Saturday");
        break;
    case 6:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Enter a valid day");
}

//task 5
let studentGrade = 59;
switch (true) {
    case studentGrade > 79 && studentGrade <= 100:
        console.log("Your Garde is A1");
        break;
    case studentGrade > 69 && studentGrade <= 79:
        console.log("Your Grade is A");
        break;
    case studentGrade > 59 && studentGrade <= 69:
        console.log("Your Garde is B");
        break;
    case studentGrade > 49 && studentGrade <= 59:
        console.log("Your Grade is C");
        break;
    case studentGrade > 40 && studentGrade <= 49:
        console.log("Your Garde is D");
        break;
    default:
        console.log("You are failed");
}

//Activity 4: Conditional (Ternary) Operator
//task 6
let num = 9;

let result = (num % 2 == 0) ? "Even" : "Odd";
console.log(result);

//Activity 5:Combining Condition 
//task 7

let year = 2024;
let isLeepYear;
if (year % 4 === 0){
    isLeepYear = true;
}
else if (year %  100 === 0 ){
    isLeepYear = false;
}
else if (year % 400 === 0){
    isLeepYear = true;
}
else{
    isLeepYear = false;
}

if (isLeepYear) {
    console.log(`${year} is leep year`);
}else{
    console.log(`${year} is not leep year`);
}









// just my friend code

let score = 81;
switch (true) {
  case score > 80 && score <= 100:
    console.log("Grade: A");
    break;
  case score > 60 && score <= 80:
    console.log("Grade: B");
    break;
  case score > 40 && score <= 60:
    console.log("Grade: C");
    break;
  case score > 33 && score <= 40:
    console.log("Grade: D");
    break;
  case score > 0 && score < 33:
    console.log("Grade: F");
    break;
  default:
    console.log("Score is out of range");
}
