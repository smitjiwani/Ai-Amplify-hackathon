import React, { useState } from 'react'
import { Axios } from 'axios';

function InputTodo() {

  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState("")

  const getTodo = () =>{
    Axios.get("http://localhost:5000/todos").then(
      (response) => {
        console.log(response);
      }
    )
  }

    const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
        <h1>Input Todo</h1>
        <form>
            <input 
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
            <button>ADD</button>
            <button onClick={getTodo}> Get Todos</button>
        </form>
    </div>
  )
}

export default InputTodo