import db from "../db.js"

// const getTodos = "SELECT * FROM todos"
const getTodos = db.select().from('todos')

const getTodoById = "SELECT * FROM todos WHERE ID = $1"

export default queries = {
  getTodos,
  getTodoById,
}
