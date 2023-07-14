import express from "express";
// import cors from "cors";
// import pool from "./db.js";
import db from "./db.js";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//ROUTES

//CREATE A TODO

app.post("/todos", async(req,res)=>{
    try{

        const newTodo = await db('description').insert({ description: req.body.description }).returning('*')
        res.json(newTodo)

        // const { description } = req.body;
        // const newTodo = await db.query(
        //     "INSERT INTO todo {description} VALUES($1)",
        //     [description]
        // );

        // res.json(newTodo);
    }catch(err){
        console.error(err.message)
    }
})

//DELETE A TODO

//UPDATE A TODO

//GET ALL TODOS

//GET A TODO

let count = 0;

app.get("/", (req, res) => {
    count++;
    res.send(`hello  world, this site has been visited ${count} times`)
})

app.listen(5000, () => console.log(`server running on port 5000`))