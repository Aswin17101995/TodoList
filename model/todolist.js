const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    description:String,
    category:String,
    duedate:Date,
    completed:Boolean
})

const Todo = mongoose.model('Todo',TodoSchema)
module.exports = Todo;