'use strict';
//A promise in JS is a placeholder for some data, sometime in the future,
//the role of a promise is 1. pending (hasn't been fulfilled), 2. Fulfilled/Sucesss, 3. Rejection/failed. 


// They are two functionalites related to a promise, then and catch 
//Creating a promise/new promises.

let prom = new Promise((resolve, reject) =>{
    let a = 1 + 3;
    if (a==4){
        resolve("Yes, its a success well done");
    }else{
        reject("Failed calculation, please try again");
    }
})

prom.then((message) =>{
    console.log(`This is a success carry on with your work: ${message}`);
}).catch((message)=>{
    console.log(`This is not working: ${message}`);
}
)