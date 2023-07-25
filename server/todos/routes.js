import Router from "express"
import * as controller from "./controller.js"

const router = Router()

// get all todos
router.get("/", controller.getTodos)
router.get("/:id", controller.getTodoById)
router.post("/", controller.addTodos)
router.delete("/:id", controller.deleteTodo)
router.put("/:id", controller.updateTodo)

export default router
