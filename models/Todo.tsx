import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    title:  String
}, {timestamps: true})

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema)