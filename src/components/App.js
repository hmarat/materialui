import React, { Component, Fragment } from 'react';
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from "../store"

export default class App extends Component {
  state = {
    exercises
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

  render() {
    console.log(this.getExercisesByMuscles())
    return (
      <Fragment>
        <Header />

        <Exercises exercises={this.getExercisesByMuscles()} />

        <Footer muscles={muscles} />

      </Fragment>
    )
  }
}