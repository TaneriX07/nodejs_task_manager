const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
require('dotenv').config() // Read the URI in .env

const PORT = process.env.PORT || 3000

// Middleware
app.use(express.static('./public'))
app.use(express.json())

// Routes
// app.get('/api/v1/tasks')         - Get all tasks
// app.post('/api/v1/tasks')        - Create a task
// app.get('/api/v1/tasks/:id')     - Get a single task
// app.patch('/api/v1/tasks/:id')   - Update a task
// app.delete('/api/v1/tasks/:id')  - Delete a task
app.use('/api/v1/tasks', tasks)

// Return 404 for other routes
app.use(notFound)

// Catch errors
app.use(errorHandler)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}....`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
