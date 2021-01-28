'use strict';

//Array = A list of items/values, index, collection of objects, stores information
//Stores same values, arraylists, fixed size, immutable, 

//4 different ways/methods to create an Array on JS: 
let array = Array();
let arraywithSize = Array(10); 
let arraywithValues = Array("Tom", "Dan-Dan", "Eddy");
let shortHand = [1,2,3]; // <----- This is the general convention creating Arrays

//Arrays in JS can be accessed at anytime in any index = if it doesn't contain a value it will return 
//UNDEFINED
// Arrays can be sparsley filled, any unassigned part of an Array are UNDEFINED

let room = [];
room [0] = "Dan";

console.log(room);
console.log(room[2]); //UNDEFINED, 

room[2] = "Vinesh";
room[3] = "Sav";
console.log(room);

room[1] = {fname:"someone", where: "Manny", year: 2021};
room[4] = {fname: "someone else", grade:12, year:2021, subjects:["maths","english","science"]}

console.log(room);

//Arrays can be resized at any time!
let students = Array(10);
students[11] = "hello";
console.log(students.length);

//methods!
let fruits = ["Banana","Strawberry","Melon"];
console.log(fruits);

//push() = adds to the END of an Array
fruits.push
console.log(fruits);

//pop() = Removes from the END of an array 
fruits.pop();
console.log(fruits);

//unshift() = adds to the START of an ARRAY
fruits.unshift("pear");
console.log(fruits);

//shift() = remove from the start 
fruits.shift();
console.log(fruits);

//loops => Array 
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruits of fruits){
    console.log(fruits);
}

console.log(fruits);

