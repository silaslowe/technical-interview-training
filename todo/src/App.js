import React from "react"
import { Form } from "./components/Form"
import { ToDoList } from "./components/ToDoList"
import { ToDoProvider } from "./components/ToDoProvider"

function App(props) {
  return (
    <>
      <ToDoProvider>
        <h1>To Do</h1>
        <Form {...props} />
        <ToDoList {...props} />
      </ToDoProvider>
    </>
  )
}

export default App
