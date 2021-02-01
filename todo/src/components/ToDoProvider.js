import React, { useState, useEffect } from "react"

export const ToDoContext = React.createContext()

export const ToDoProvider = (props) => {
  const [toDos, setToDos] = useState([])

  const getToDos = () => {
    return fetch("http://localhost:8088/todo")
      .then((res) => res.json())
      .then(setToDos)
  }

  const createToDo = (todo) => {
    return fetch("http://localhost:8088/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(getToDos)
  }
  const deleteToDo = (id) => {
    return fetch(`http://localhost:8088/todo/${id}`, {
      method: "DELETE",
    }).then(getToDos)
  }
  return (
    <ToDoContext.Provider value={{ toDos, getToDos, createToDo, deleteToDo }}>
      {props.children}
    </ToDoContext.Provider>
  )
}
