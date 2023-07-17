import db from "../db.js"
// import getTodos from "./queries.js"

const getTodos = async (req,res) => {
  // const todo = await getTodos
  const todos = await db.select().from('todos')
  res.status(200).json(todos)
}

const getTodoById = async (req,res) => {
  const id = ParseInt(req.paramds.id)
  const todo = await db.select().from('todos').where('id', id)
  res.status(200).json(todo)
}

export {
  getTodos,
  getTodoById,
}
