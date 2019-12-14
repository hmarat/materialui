import React, { Component, Fragment } from 'react';
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from "../store"

export default class App extends Component {
  state = {
    exercises,
    exercise: {},
    editMode: false
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = [...exercises[muscles], exercise]

      return exercises;
    }, initExercises))
  }

  handleCategorySelect = (category) =>
    this.setState(() => ({ category }))

  handleExerciseSelected = (id) =>
    this.setState(({ exercises }) => ({ exercise: exercises.find((ex) => id === ex.id) }))

  handleCreateExercise = (exercise) =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))

  handleDeleteExercise = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter((ex) => ex.id !== id)
    }))

  handleSelectEdit = id =>
    this.setState(({ }) => ({
      exercise: exercises.find((ex) => id === ex.id),
      editMode: true
    }))

  render() {
    const category = this.state.category;

    return (
      <Fragment>
        <Header muscles={muscles} handleCreateExercise={this.handleCreateExercise} />

        <Exercises
          exercises={this.getExercisesByMuscles()}
          category={category}
          exercise={this.state.exercise}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleDeleteExercise}
          onSelectEdit={this.handleSelectEdit}
        />

        <Footer muscles={muscles} category={category} handleCategorySelect={this.handleCategorySelect} />

      </Fragment>
    )
  }
}