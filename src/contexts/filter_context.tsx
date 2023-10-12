"use client"

import { FilterType } from "@/constants/filter_types";
import { LEGS, CHEST, SHOULDERS, BACKS, ARMS } from "@/constants/muscle_type";
import { ReactNode, createContext, useState } from "react";

// Define a union type for all possible muscle enums
type MuscleEnum = LEGS | CHEST | BACKS | SHOULDERS | ARMS;

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  muscle: {} as MuscleEnum, // Initialize muscle as an empty object
  setMuscle: (muscle: MuscleEnum) => {}, // Initialize setMuscle as an empty function
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [muscle, setMuscle] = useState({} as MuscleEnum); // Initialize muscle state

  return (
    <FilterContext.Provider
      value={{ 
        search, 
        page, 
        type, 
        muscle, 
        setMuscle, 
        setSearch, 
        setPage, 
        setType 
    }}
    >
      {children}
    </FilterContext.Provider>
  );
}
