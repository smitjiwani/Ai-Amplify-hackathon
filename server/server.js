import express from "express";
import todoRoutes from "./todos/routes.js"
import morgan from "morgan";

const PORT = process.env.PORT || 5000
const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/todos", todoRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
