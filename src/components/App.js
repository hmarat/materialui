import React, { useState } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from "../store"

const App = props => {
    const [exercisesState, setExercisesState] = useState(exercises);

    const getExercisesByMuscles = () => {
        return Object.entries(exercisesState.reduce((exercises, exercise) => {
            const muscles = exercise.muscles;
            exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];
            return exercises
        }, {}))
    }

    return (
        <React.Fragment>
            <Header />

            <Exercises exercises={getExercisesByMuscles()} />

            <Footer muscles />
        </React.Fragment>
    )
}

export default App