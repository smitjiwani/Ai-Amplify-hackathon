import React, { useEffect, useState } from 'react'
import "../styles/ListTodo.css"

// import { Axios } from 'axios'
// import { METHODS } from 'http';

function ListTodo() {

    const [todos, setTodos] = useState([]);

   // Delete todos

    const deleteTodo = async (id) =>{
        try {
            
            // console.log("delete works")

            const deleteTodo = await fetch(`api/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id))
            getTodos();
        } catch (err) {
            console.error(err.message)
        }
    }

    const getTodos = async () => {

        try {
            const response = await fetch("/api/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }


    useEffect(() => {
        getTodos();
    });

    // console.log(todos)

    return (
        <div>
            <table>
                <tr>
                    <th>Checkbox</th>
                    <th>Description</th>
                    <th>Buttons</th>
                </tr>

                {todos.map(todo => (
                    // <tr>
                     <tr key={todo.id}> 
                        <td><input type="checkbox" /></td>
                        <td>{todo.description}</td>
                        <td>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            {/* <button>Delete</button> */}
                            <button>Edit</button>
                        </td>
                    </tr>
                ))}

                {/* <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr> */}
            </table>
        </div>
    )
}


export default ListTodo;

