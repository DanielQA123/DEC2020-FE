'use strict';

const peeps = document.querySelector("#peeps");
const username = document.querySelector("#name");
const job = document.querySelector("#job");
const alert = document.querySelector("#onsuccess");
const modal = document.querySelector("#firstModal");

const printNameToScreen = (username) =>{
    let user = document.createElement("p"); //creates paragraph element 
    let text = document.createTextNode(`${username}`);
    user.appendChild(text); //<p> username </p>
    peeps.appendChild(user);
}

//Getting (GET) information from the API: 

const retrieveData = () =>{
    fetch("https://reqres.in/api/users")
    .then((response)=>{
        //Here we are checking if that response is okay (i.e. 200)

        if(response.status !== 200){
            throw new Error("I don't have an API status of 200");
        }else{
            console.log(response);
            console.log(`response is OK (200)`);
            //json-ify it (which returns a promise) and chaining it to get info from a server
            response.json().then((infofromserver)=>{
                console.log(infofromserver);
                console.log(infofromserver.data); // this a key which we want an array (6)
                for(let users of infofromserver.data){
                    console.log(users.first_name);
                    printNameToScreen(users.first_name);
                }
            })
        }
    }).catch((err)=>{
        console.error(err);
    })
}

const createUsers = () =>{
    const userValue = username.value;
    const jobValue = job.value;

    let data ={
        name:userValue,
        job:jobValue,
    }


fetch("https://reqres.in/api/users",{
    method: "POST",
    body: JSON.stringify(data),
    headers:{
        "Content-Type":"application/json"
    }
})
.then(response => response.json())
.then(info =>{
    console.log(info);
    alert.setAttribute("class", "alert alert-succes");
    alert.innerHTML = "User has been successfully been created!";
    setTimeout( () =>{
        alert.removeAttribute("class");
        alert.innerHTML = "";
    },2000);

})
.catch(err => console.error(`stoppppppp please! ${err}`));
}

retrieveData();