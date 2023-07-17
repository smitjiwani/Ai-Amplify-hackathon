import React, { useState } from 'react'
import axios from 'axios'

function InputTodo() {

  const [description, setDescription] = useState("")
  const [todo, setTodo] = useState("")

  const getTodo = async e => {
    e.preventDefault()
    axios.get("/todos")
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  const onSubmitForm = async e => {
    e.preventDefault()
    axios.post("/todos", {description})
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h1>Input Todo</h1>
      <form>
        <input 
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button onClick={onSubmitForm}>ADD</button>
        <button onClick={getTodo}>Get Todos</button>
      </form>
    </div>
  )
}

export default InputTodo
