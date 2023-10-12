import { Exercise } from "./exercise"

export interface ExercisesFetchResponse{
    data: {
        allExercises: Exercise[]
    }
}