"use client"

import { useExercises } from "@/hooks/use_exercises"

interface ExerciseListProps{

}

export function ExercisesList(props: ExerciseListProps){
    const {data} = useExercises();
    console.log(data);

    return (
        <></>
    )
}