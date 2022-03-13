import connectDB from '../../../db/connectDB'
import Todo from '../../../models/Todo'

export default async function handler (req, res) {
    const {method, query: {id}} = req

    await connectDB()   

    if(method === 'DELETE') {
        try {
            await Todo.findByIdAndDelete(id)
            res.json('This Post has been deleted ...')
        } catch (error) {
            res.json(error)
        }
    }
}
