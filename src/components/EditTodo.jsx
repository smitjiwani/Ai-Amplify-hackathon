
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/EditTodo.css"


const EditTodo = ({ todo }) => {
    console.log(todo)
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState(todo.description)

    const handleClose = () => setShow(!show);
    const handleShow = () => setShow(!show);

    // Edit description function

    const updateDescription = async (e) => {
        try {
            const body = { description };
            const response = await fetch(`/api/todos/${todo.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow} data-target={`id${todo.id}`}>
          Edit Todo
        </Button>
  
        <Modal className='modal' show={show} onHide={handleClose} id={`id${todo.id}`}>
          <Modal.Header>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type='text' value={description} onChange={e => setDescription(e.target.value)}/> </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={e => updateDescription()}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default EditTodo