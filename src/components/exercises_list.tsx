import { useExercises } from "@/hooks/use_exercises";
import { ExerciseCard } from "./exercise_card";
import styled from "styled-components";

const ParentContainer = styled.div`
  width: 100%; 
`;

interface Exercise {
  id: number;
  name: string;
  category: string;
  image_url: string;
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 28px;
`;

export function ExercisesList() {
  const { data } = useExercises();
  console.log(data);

  return (
    <ParentContainer>
      <ListContainer>
        {data?.map((exercise: Exercise) => (
          <ExerciseCard
            key={exercise.id}
            name={exercise.name}
            category={exercise.category}
            image_url={exercise.image_url}
          />
        ))}
      </ListContainer>
    </ParentContainer>
  );
}
