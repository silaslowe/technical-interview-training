import React, { useState, useEffect, useContext } from "react"
import { ToDo } from "./ToDo"
import { ToDoContext } from "./ToDoProvider"

export const ToDoList = (props) => {
  const { getToDos, toDos } = useContext(ToDoContext)

  useEffect(() => {
    getToDos()
  }, [])
  return (
    <>
      <h1>List</h1>
      <div>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} todo={toDo} />
        ))}
      </div>
    </>
  )
}
