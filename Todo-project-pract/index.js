'use strict';

const todoURL = "http://localhost:8080/todo";
const todoSystemURL = "http://localhost:8080/todoSystem";

const todoReadId = document.querySelector("#todoReadId");

const todoTitle = document.querySelector('#createTitle');
const todoDescription = document.querySelector('#createDescription');
const todoDate = document.querySelector('#createDate');
const todoDone = document.querySelector('#createDone');

const todoId = todoIdUpdate.querySelector('#');
const todoTitle = todoTitleUpdate.querySelector('#');
const todoDescription = todoDescriptionUpdate.querySelector('#');
const todoDate = todoDateUpdate.querySelector('#');
const todoDone = todoDoneUpdate.querySelector('#');

const todoDeleteId = document.querySelector('#deleteTodo');

//CRUD FUNCTIONALITY => CREATE, READ, UPDATE, DELETE
//API => POST, GET, PUT, DELETE


//DOM: 

//POST = CREATE:
const createTodo = () => {

    const todoTitleValue = todoTitle.value;
    const todoDescriptionValue = todoDescription.value;
    const todoDateValue = todoDate.value;
    const todoDoneValue = todoDone.value;

    let data = {

        "title": todoTitleValue,
        "description": todoDescriptionValue,
        "date": todoDateValue,
        "finish": todoDoneValue
    }

    fetch("http://localhost:8080/todo/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`Something went wrong! ${err}`));

}


//GET = READ:

const readTodoId = (id) => {

    const todoReadId = todoReadId.value;

    fetch(`http://localhost:8080/todo/read/${todoReadId}`)

        .then((response) => {
            if (response.status !== 200) {
                console.log(`Looks Like there was a problem.Status Code: ${response.status}`);
                return;
            }
            response.json().then((infofromserver) => console.log(infofromserver));
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

        const todoIdValue = todoIdUpdate.value;
        const todoTitleValue = todoTitleUpdate.value;
        const todoDescriptionValue = todoDescriptionUpdate.value;
        const todoDateValue = todoDateUpdate.value;
        const todoDoneValue = todoDoneUpdate.value;

    let data = {

        "id": todoIdValue,
        "title": todoTitleValue,
        "description": todoDescriptionValue,
        "date": todoDateValue,
        "finish": todoDoneValue
    }

    fetch(`http://localhost:8080/todo/update/${todoUpdateId}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "applocation/json"
        }
    })
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`Something Went Wrong! ${err}`));
}


//DELETE/REMOVE = DELETE: 
const deleteTodo = () => {

    const todoDeleteId = todoIdDelete.value;

    fetch(`http://localhost:8080/todo/delete/${todoDeleteId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(() => readAllTodo())
        // .then(info => console.log(info))
        .catch(err => console.error(`Something Went Wrong!! ${err}`))

}