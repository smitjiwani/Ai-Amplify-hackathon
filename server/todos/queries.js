import db from "../db.js"

const getTodos = db.select().from('todos')

const getTodoById = db.select().from('todos').where('id', id)

const addTodo = db('todos').insert({ description: req.body.description }).returning('*')

const deleteTodo = db('todos').where('id', id).del().returning('*')

const updateTodo = db('todos').where('id', id).update({ description: req.body.description }).returning('*')


export default queries = {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo
}
