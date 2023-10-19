import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useFilter } from "./use_filter";
import { FilterType } from "@/constants/filter_types";
import { GetCategoryByType } from "@/utils/get_category_by_type";
import { ARMS, BACKS, CHEST, LEGS, SHOULDERS } from "@/constants/muscle_type";
import { GetMuscleByType } from "@/utils/get_muscle_by_type";
import { useDeferredValue } from "react";

type MuscleType = LEGS | CHEST | ARMS | BACKS | SHOULDERS;

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetchExercises = async (query_filtered: string) => {
  try {
    const response: AxiosResponse = await axios.post(API_URL, {
      query: query_filtered,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const MountQuery = (category: FilterType, muscle: MuscleType | null) => {
  if (category === FilterType.ALL) {
    return `query {
      allExercises {
        name
        category
        id
        image_url
        muscle_type
      }
    }`;
  } else if (muscle) {
    return `query {
      allExercises(filter: { category: "${GetCategoryByType(category)}", muscle_type: "${GetMuscleByType(muscle)}" }) {
        name
        category
        id
        image_url
        muscle_type
      }
    }`;
  } else {
    return `query {
      allExercises(filter: { category: "${GetCategoryByType(category)}" }) {
        name
        category
        id
        image_url
        muscle_type
      }
    }`;
  }
}


export function useExercises() {
  const { category, muscle, search } = useFilter();
  const searchDeffered = useDeferredValue(search);
  const filtered_query = MountQuery(category, muscle);
  const { data } = useQuery(["exercises", category, muscle], () => fetchExercises(filtered_query));

  const exercises = data?.data.allExercises
  const filteredExercises = exercises?.filter((exercise: any) => exercise.name.toLowerCase().includes(searchDeffered.toLowerCase()))

  return {
    data: filteredExercises,
  };
}
