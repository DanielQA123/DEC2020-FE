'use strict';

const todoURL = "http://localhost:8080/todo";
const todoSystemURL = "http://localhost:8080/todoSystem";

const todoTitle = document.querySelector('#createTitle');
const todoDescription = document.querySelector('#createDescription');
const todoDate = document.querySelector('#createDate');
const todoFinish = document.querySelector('#createFinish')

const todoIdDelete = document.querySelector("#todoIdDelete");

//CRUD FUNCTIONALITY => CREATE, READ, UPDATE, DELETE
//API => POST, GET, PUT, DELETE

//DOM: 

//POST = CREATE:
const createTodo = () => {

    const todoTitleValue = todoTitle.value;
    const todoDescriptionValue = todoDescription.value;
    const todoDateValue = todoDate.value;
    const todoFinishValue = todoFinish.value;

    let data = {

        "Title":todoTitleValue,
        "Description":todoDescriptionValue,
        "Date":todoDateValue,
        "Finish":todoFinishValue
    }

    fetch("http://localhost:8080/todo/create", {
        
    })




}


//GET = READ:

const readTodoId = () => {
    fetch('http://localhost:8080/todo/1')
        .then((response) => {
            if (response.status !== 200) {
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
        .then(info => {
            for (let band of info) {
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

    const todoIdDelete = _todoIdDelete.value;

    fetch(`http://localhost:8080/todo/delete/${todoIdDelete}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`Something Went Wrong!! ${err}`))

}