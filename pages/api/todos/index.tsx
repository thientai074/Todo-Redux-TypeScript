import connectDB from "../../../db/connectDB";
import Todo from '../../../models/Todo'

export default async function handler (req, res) {
    const { method } = req

    await connectDB()

    if(method === 'GET') {
        try {          
            const todos = await Todo.find()
            res.json(todos)
        } catch (error) {
            res.json(error)
        }
    }

     if( method === 'POST')  {
        try { 
            const {title} = req.body
            const newTodo = new Todo({title})
            await newTodo.save()
            res.json(newTodo)           
        } catch (error) {
            res.json(error)
        }
     }
}

