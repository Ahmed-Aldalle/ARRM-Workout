const express = require('express')
const Workouts = require('../Models/workoutSchema')
const mongoose = require('mongoose')

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workouts.find({})
    return res.status(200).json(workouts)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: error.message })
  }
}

const createWorkout = async (req, res) => {
  try {
    const { date, name, load, repetition } = req.body
    const workout = await Workouts.create({
      date,
      name,
      load,
      repetition,
    })
    return res.status(200).json(workout)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: error.message })
  }
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: 'Workout with this Id does not exist.' })
  }

  const workout = await Workouts.findOneAndDelete({ _id: id })

  if (!workout) {
    return res
      .status(404)
      .json({ error: 'Workout with this Id does not exist.' })
  }
  return res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
}
