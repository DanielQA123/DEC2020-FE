'use strict';
const num1 = document.querySelector("#firstNumber");
const num2 = document.querySelector("#secondNumber");
const result = document.querySelector("#result");

console.dir(num1);
//Craeting a fuction to get values and return the values entered by the user
const getValues =() =>{
   return[Number.parseFloat(num1.value), Number.parseFloat(num2.value)];
}

const add = () =>{
    const[number1, number2] = getValues();
    const newResult = number1 + number2;
    result.value = newResult;
}

