import React, { useState, useContext } from "react"
import { ToDoContext } from "./ToDoProvider"

export const ToDo = (props) => {
  const { deleteToDo } = useContext(ToDoContext)
  console.log(props.todo.id)
  return (
    <>
      <p>{props.todo.chore}</p>
      <p>{props.todo.location}</p>
      <button
        onClick={(e) => {
          e.preventDefault()
          deleteToDo(props.todo.id)
        }}
      >
        Delete
      </button>
    </>
  )
}
