'use strict';

const todoURL = "http://localhost:8080/todo";
const todoSystemURL = "http://localhost:8080/todoSystem";

//CRUD FUNCTIONALITY => CREATE, READ, UPDATE, DELETE
//API => POST, GET, PUT, DELETE

//DOM: 

//POST = CREATE:
const createTodo = () => {
    fetch()
}


//GET = READ:

const readTodoId = () => {
    fetch('http://localhost:8080/todo/1')
    .then((response) =>{
        if(response.status !== 200){
            console.log(`Looks Like there was a problem.Status Code: ${response.status}`);
            return;
        }
        response.json().then((data) => console.log(data));
    })
    .catch((err) => console.log(`Fetch Error: -S ${err}`)
    );

}

//GET = READ ALL:

const readAllTodo = () => {
    fetch('http://localhost:8080/todo/readAll')
    .then(response => response.json())
    .then(info =>{
        for(let band of info){
            console.log(band);
        }
    })
    .catch(err => console.error(`error ${err}`))
}

//PUT = UPDATE:
const updateTodo = () => {

}


//DELETE/REMOVE = DELETE: 
const deleteTodo = () => {

    fetch(`http://localhost:8080/todo/delete/${todoIdDelete}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response => response.json())
    .then(info => console.log(info))
    .catch(err => console.error(`Something Went Wrong!! ${err}`))

}