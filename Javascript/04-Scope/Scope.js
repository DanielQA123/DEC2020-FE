//'use strict'
//With scope you don't really need USE STRICT term but
// you generally want to have it when working on JS

function deposit(increment){
    bankbalance = 1000;
    let balance = bankbalance + increment;
    return `${balance}`;
}

console.log(deposit(10));
console.log(bankbalance);

var x =10;
console.log(x + "" + y);
var y = 12;

let x2 = 10;
console.log(x2 + "" + y2);
let y2 = 15;
