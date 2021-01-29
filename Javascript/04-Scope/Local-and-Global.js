'use strict';

function someFunction(){
    let hello = "billy bob jim"; // local variable 
console.log(hello, "called from the function");
}

someFunction();
//console.log(hello);

let check = false;
function changecheck(){
    check = true; // refer to an OUTER Scope variable/value 
}

// console.log(check); //false
// changecheck();
// console.log(check); // true

// we always tend to look within before we go else where 

function test(){
    flag = true;
    console.log(flag);
    test1();
    console.log(flag);
}

function test1(){
    flag = false;
    return;
}

function another1(){
    flag = true;
    console.log(flag);
    another1again();
    console.log(flag);
}

function another1again(){
    let flag = false;
    return;
}

another1();

// banking example
let current_balance = 7000; 

function deposit(toadd){
    return current_balance + toadd; 
}

function withdraw(howmuch){
    return current_balance - howmuch;
}