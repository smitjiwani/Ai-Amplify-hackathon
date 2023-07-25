import React, { useState } from 'react'
import axios from 'axios'
import "../styles/InputTodo.css"


function InputTodo() {

  const [description, setDescription] = useState("")

  const onSubmitForm = async e => {
    e.preventDefault()
    axios.post("/api/todos", { description })
      .then(res => console.log(res))
      .then(setDescription(""))
      .catch(err => console.error(err))
    window.location = "/"
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
      </form>
    </div>
  )
}

export default InputTodo
