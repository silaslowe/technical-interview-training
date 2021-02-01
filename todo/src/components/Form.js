import React, { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { ToDoContext } from "./ToDoProvider"

export const Form = (props) => {
  const { createToDo, toDos } = useContext(ToDoContext)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    createToDo(data)
  }

  useEffect(() => {}, [toDos])

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Form Goes Here</h1>
        <label>Chore:</label>
        <input name="chore" ref={register} />
        <label>Location:</label>
        <input name="location" ref={register} />
        <input type="submit" />
      </form>
    </>
  )
}
