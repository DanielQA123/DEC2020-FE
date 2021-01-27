'use strict'
//=>Objects 
//An object cab be defined as an unordered collection of related data, of primitive or reference types 
// in the form of key:value pairs.
//An object is a reference data type. Variables that are assigned a reference value are given a reference or pointer to that value. 

//Tutorial Creating Objects 
let myCar = new Object();
myCar["make"] = "Ford";
myCar["model"] = "Focus ST";
myCar["colour"] = "Red";

console.log(myCar); //should show all the attributes
console.log(myCar.make);

let student = new Object(); 

let person = {}; // <-- short hand 

// adding properties to your object
person.name = "Tony Stark"; 
person["date of birth"] = 1965;

console.log(person);
console.log(person.name); //tony stark
console.log(person["date of birth"]); 



//=>Arrays
//Arrays hold a set of related data
//They can be resized, index of 0, sparsely filled, unassigned parts of an array are undefiend 
//they can be created in short hand using square brackets


//=> JSON
//JSON = Java Script Obect Notation 
//programming language independent, easy to write and easy to read. 