import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = async () => {
  try {
    const response: AxiosResponse = await axios.post(API_URL, {
      query: `query {
        allExercises {
          name
          category
          id
          image_url
        }
      }`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export function useExercises() {
    const { data, isLoading, isError } = useQuery(["exercises"], fetcher);
  
    if (isLoading) return "Loading...";
    if (isError) return `Error fetching data: ${isError.message}`;
  
    return {
      data: data?.data.allExercises,
    };
  }
  
