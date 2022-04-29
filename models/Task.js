const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide name'],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
