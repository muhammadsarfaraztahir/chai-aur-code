// Activity 1: Arithmetic Operations
// task 1

console.log(3 + 4);

//task 2

console.log(3 - 4);

//task 3

console.log(3 * 4);

//task 4

console.log(3 / 4);

// task 5

console.log(2 % 4);

// Activity 2 : Assignment Operater 
// task 6
var a = 2;
var y = 3;

console.log(a += y);

// task 7

var x = 4;
var z = -10;
console.log(x -= z);

// Activity 3: Comparison Operators
// task 8

let s = 5;
let t = 6;
console.log(s > t);
console.log(s < t);

// task 9 

console.log(s >= t);
console.log(s <= t);

// task 10
console.log(s == t);
console.log(s === t);

// Activity 4: Logical Operators
// task 11
let num = 2;
let num2 = 3;
if(num === num2 && num > num2){
    console.log("true" , "task 11");
}
else{
    console.log("false", "task 11");
}

// task 12

if(num === num2 || num > num2){
    console.log("true" , "task 12");
}
else{
    console.log("false" , "task 12");
}

// task 13

if(num !== num2 ){
    console.log("true", "task 13");
}
else{
    console.log("false", "task 13");
}

// activity 5: Ternary Operators 
// task 14


let q = prompt();
var e = q.split("");
console.log(e);
(e[0] == "-")? console.log("Negative"): console.log("Positive");


// second person code 

let number = -1; 
let result = number === 0 ? "Zero" : number > 0 ? "Positive" : "Negative";
console.log(result, "hello");







