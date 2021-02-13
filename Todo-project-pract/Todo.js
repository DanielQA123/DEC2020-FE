'use strict';

//DOM manpulation with Fetching API

//API from spring: 

const todoURL = "http://localhost:8080/todo";
const todoSystemURL ="http://localhost:8080/todoSystem";

//Attributes:

const newTodo = document.querySelector("#newTodo")

const todoTitle = document.querySelector("#title");
const todoDescription = document.querySelector("#description");
const todoDate = document.querySelector("#date");
const todoFinish = document.querySelector("#finish");

const createTodo = () =>{
    const newTodo = newTodo.value;

    let data ={

        {
            "date": 2021-02-11,
            "description": string,
            "finish": true,
            "title": string
          }

        fetch("http://localhost:8080/todo/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then()
        .then()
        .catch();
    }

const readAll = () =>{
    fetch("http://localhost:8080/todo/readAll")
    .then(response => response.json())
    .then(todo=>{


    })

}

const readTodo = () =>{
    fetch("http://localhost:8901/todo")

}

const updateTodo = () =>{
}

const deleteTodo = () =>{
}
