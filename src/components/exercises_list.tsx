import { useExercises } from "@/hooks/use_exercises";
import { ExerciseCard } from "./exercise_card";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export function ExercisesList() {
  const { data } = useExercises();
  console.log(data);

  return (
    <ListContainer>
      {data?.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          name={exercise.name}
          category={exercise.category}
          image_url={exercise.image_url}
        />
      ))}
    </ListContainer>
  );
}
