import React, { Component, Fragment } from 'react';
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from "../store"

export default class App extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise]

      return exercises;
    }, {}))
  }

  handleCategorySelect = (category) => {
    this.setState(() => ({ category }))
  }

  handleExerciseSelected = (id) => {
    this.setState(({ exercises }) => ({ exercise: exercises.find((ex) => id === ex.id) }))
  }

  handleCreateExercise = (exercise) => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  render() {
    const category = this.state.category;

    return (
      <Fragment>
        <Header muscles={muscles} handleCreateExercise={this.handleCreateExercise} />

        <Exercises exercises={this.getExercisesByMuscles()} category={category} exercise={this.state.exercise} onSelect={this.handleExerciseSelected} />

        <Footer muscles={muscles} category={category} handleCategorySelect={this.handleCategorySelect} />

      </Fragment>
    )
  }
}