'use strict';

//Destructuring = extracting data from objects and arrays
const animals = ["giraffe","zebra","horse","lion"];
//const zebra = animals[1];
//const giraffe = animals[0];
console.log(animals[1]);

//destruction my array 
const[giraffe,zebra,horse,lion] = animals;
console.log(zebra);

let myObject = {var1:"salt", var2:"pepper"};
let {var1, var2} = myObject;
console.log(var1);// salt
console.log(var2);// pepper

//rename MY desconstructed object 
let{var1: condament1, var2:pepper} = myObject;
console.log(condament1);
console.log(pepper);

//spread operator = collates the values together and is stored in an arrary []
const mylongArrary = [1,23,466,7,8,4444,6688,8889];
const [a,b,c, ...rest] = mylongArrary; 
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

const person = {
    first: "Dan-Dan",
    middle: "kev",
    last: "Man",
    city: "manchester",
    phone: "0789448233",
    country: "UK",
    age: 22,
    email:"dan_dan@yahoo.com",
    dob:"12/12/1994",
    postcode: "M11", 
    occupation:"student", 
    gender: "male"
};

let{first, middle, last, gender="male"} = person;
// let first = person.first; 
// let middle = person.middle; 
// let last = person.last; 
// let gender = male; 
// let gender = person.gender; //female

console.log(`Your human is called ${first} ${middle} ${last} he is: ${gender}`);

