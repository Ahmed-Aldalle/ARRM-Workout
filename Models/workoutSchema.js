const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema(
  {
    date: String,
    name: String,
    load: Number,
    repetition: Number,
  },
  { timestamps: true }
)

module.exports = mongoose.model('workouts', workoutSchema)
