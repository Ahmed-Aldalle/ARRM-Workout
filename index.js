//import './Routes/workouts'
const express = require('express')
const Workouts = require('./Models/workoutSchema')
const PORT = 8000
const app = express()
const mongoose = require('mongoose')
const router = express.Router()
const cors = require('cors')
const dbUrlAccess =
  'mongodb+srv://ARRM:Ahmed1997@cluster0.xmly3fm.mongodb.net/RMA-WorkoutTracker?retryWrites=true&w=majority'
const workoutRouter = require('./Routes/workouts')

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to ARRM WORKOUT.')
})
app.use('/ARRM/workouts', workoutRouter)

// async function testCreate() {
//   const workout = await Workouts.create({
//     name: 'Bench Press',
//     load: 10,
//     reps: 12,
//   })
//   console.log(workout)
// }

mongoose
  .connect(dbUrlAccess)
  .then(() => {
    console.log('Connected to db.')
    app.listen(PORT, () => {
      console.log(`ARRM WORKOUT is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
