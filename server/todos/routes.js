import Router from "express"
import * as controller from "./controller.js"

const router = Router()

// get all todos
export default router.get("/", controller.getTodos)

router.get("/:id", controller.getTodoById)

// export default { router }
