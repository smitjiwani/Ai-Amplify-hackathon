import db from "../db.js"
// import getTodos from "./queries.js"

const getTodos = async (req,res) => {
  // const todo = await getTodos
  const todos = await db.select().from('todos')
  res.status(200).json(todos)
}

const getTodoById = async (req,res) => {
  const id = parseInt(req.params.id)
  const todo = await db.select().from('todos').where('id', id)
  res.status(200).json(todo)
}

const addTodos = async (req,res) => {
  try{
    const newTodo = await db('todos').insert({ description: req.body.description }).returning('*')
    res.status(201).json(newTodo)
  }catch(err){
    res.status(400).json({ message: err.message })
    console.error(err.message)
  }
}

const deleteTodo = async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const delTodo = await db('todos').where('id', id).del().returning('*')
    res.status(201).json(delTodo)
  } catch (err) {
    res.status(400).json({ messgae: err.message })
    console.log(err.message)
  }
}

const updateTodo = async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const updateTodo = await db('todos').where('id', id).update({ description: req.body.description }).returning('*')
    res.status(201).json(updateTodo)
  } catch (err) {
    console.log(err.message)
  }
}

export {
  getTodos,
  getTodoById,
  addTodos,
  deleteTodo,
  updateTodo
}
