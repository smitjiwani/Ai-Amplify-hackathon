import express from "express";
import todoRoutes from "./todos/routes.js"
// import cors from "cors";
// import pool from "./db.js";
import db from "./db.js";
import morgan from "morgan";

const PORT = process.env.PORT || 5000
const app = express();

// app.use(cors())

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

let count = 0;

app.get("/", (req, res) => {
  count++;
  res.send({
    hello: "Hello world!",
    visits: `This site has been visited ${count} times!`
  })
})

// ROUTES
app.use("/api/todos", todoRoutes)

// // UPDATE A TODO
// app.put('/todos/:id', async (req, res) => {
//   const id = req.params.id
// })
//
// // UPDATE A TODO ELEMENT
// app.patch('/todos', async (req, res) => {
//   const todo = await db.select().from('todos')
//   res.json(todo)
// })
//
// // DELETE A TODO
// app.delete("/todos/:id", async(req,res) => {
//   try {
//     const id = req.params.id
//     res.status(200)
//   } catch (err) {
//     console.error(err.message)
//   }
// })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
