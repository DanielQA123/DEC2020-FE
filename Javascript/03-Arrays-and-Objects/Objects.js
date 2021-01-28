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

//Iteration of myCar:
 
for(let attributes in myCar){
    console.log(`key:${attributes} value:${myCar[attributes]}`);
}


let student = new Object(); 

let person = {}; // <-- short hand 

// adding properties to your object
person.name = "Tony Stark"; 
person["date of birth"] = 1965;

console.log(person);
console.log(person.name); //tony stark
console.log(person["date of birth"]); 

//Using literal notation to create objects quicker and simpler to declare objects 
//simple and a quicker way: 

// let myCar ={make:"Range Rover", model:"SUV", colour:"Dark Grey"};
// let myCar ={make:"Audi", model:"A1", colour:"Navy"};

//Literal notation can be used to create complex arrays of objects: 

let carPark = [
    myCar,
    {make: "Audi", model:"A3", colour:"red"},
    {make: "Suzuki", model:"swift", colour:"black"}
]
console.log(carPark);

for(let cp of carPark){
    console.log(cp);
    for(let car in cp){

        console.log(`key:${car} value:${cp[car]}`); // key:[key] value:[value]
    }
}

//=>Arrays
//Arrays hold a set of related data
//They can be resized, index of 0, sparsely filled, unassigned parts of an array are undefiend 
//they can be created in short hand using square brackets


//=> JSON
//JSON = Java Script Obect Notation 
//programming language independent, easy to write and easy to read. 
//it can be used with javascript with no problems
//its a collection of name/value pairs

let myJSONObject ={
    "asda":[
        {"productname":"coconut milk","price":2.99, "quantity":3},
        {"productname":"cookies","price":1.99, "quantity":2},
        {"productname":"organic strawberries","price":3.99, "quantity":2},

    ],

    "cars":[
        {"make":"Ford", "model":"Focus ST", "colour":"Light Blue"},
        {"make":"VW", "model":"GTi", "colour":"Sliver"},
        {"make":"Volvo", "model":"x40 sport", "colour":"Grey"}

    ]
}

//if you want to add in my JSON obect class, you have to add before printing the console: 
let toAdd = {"productname":"mayo","price":0.99,"quantity":1};

console.log(myJSONObject);

console.log(myCar);
let myCarToText = JSON.stringify(myCar);
console.log(typeof myCar);
console.log(typeof myCarToText);
console.log(myCarToText);

let userData = `{"name":"Dan"}`;
console.log(typeof userData);
let obj = JSON.parse(userData);
console.log(obj);
console.log(typeof obj);