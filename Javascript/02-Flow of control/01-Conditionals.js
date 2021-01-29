'use strict';

//data types 
//String, number, boolean, null, undefined and objects
// these are all data types on javascript 

let myString = `hello`;
let myNumber = 20;
let myBool = true;
let myObj = {name:"Danny", key:"value", year: 2021, classroom: []};

console.log(myObj);

let bool1 = true;
let bool2 = false;

//checking if bool1 == bool2
//EQUALITY 
//==ONLY checks the value 

console.log(bool1 == bool2); //is it false?
console.log(1 == true);

//STRICT EQUALITY
// === checks the VALUE and the type!
console.log(1 === true); // false
console.log(myNumber === 1); // 20 === 1 (false)

let myAge = null; // null
let mydob;  // undefined

console.log(myAge == mydob); // true,
console.log(myAge === mydob); // false

console.log("" === 0);

// inequality 
let dan = "danny"; 

console.log(typeof dan);
console.log(typeof true);

// inequality = != && !==

console.log(sav != true); // just checking value

console.log(sav !== true); // checking value & type!!!