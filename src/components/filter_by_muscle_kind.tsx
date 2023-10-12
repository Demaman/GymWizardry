"use client"
import styled from "styled-components";
import { ArrowDownIcon } from "./arrow_icon";
import { useState } from "react";
import { FilterType } from "@/constants/filter_types";
import { ARMS, BACKS, CHEST, LEGS, SHOULDERS } from "@/constants/muscle_type";
import { useFilter } from "@/hooks/use_filter";

// Define a union type for all possible muscle enums
type MuscleEnum = LEGS | CHEST | BACKS | SHOULDERS | ARMS;
interface FilterByMuscleKind {
  selectedFilter: FilterType;
}

const FilterByContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  background: #FFFFFF;
  width: 176px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  list-style: none;
  top: 100%;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px
    line-height: 22px;
    cursor: pointer; 
  }

  li + li{
    margin-top: 4px;
  }
`;

export function FilterByMuscle({ selectedFilter }: FilterByMuscleKind) {
  const [isOpen, setIsOpen] = useState(false);
  const {setMuscle} = useFilter();
  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdateMuscle = (value: MuscleEnum) => {
    setMuscle(value);
    setIsOpen(false);
  }

  return (
    <FilterByContainer>
      <button onClick={handleOpen}>Organizar por</button>
      {isOpen && (
        <PriorityFilter>
            {selectedFilter === FilterType.LEGS &&
            Object.values(LEGS)
              .filter((muscle) => muscle !== undefined)
              .map((muscle) => (
                <li onClick={() =>handleUpdateMuscle(muscle)} key={muscle}>{muscle}</li>
              ))}
            {selectedFilter === FilterType.ARMS &&
            Object.values(ARMS)
              .filter((muscle) => muscle !== undefined)
              .map((muscle) => (
                <li key={muscle}>{muscle}</li>
              ))}
            {selectedFilter === FilterType.SHOULDERS &&
            Object.values(SHOULDERS)
              .filter((muscle) => muscle !== undefined)
              .map((muscle) => (
                <li onClick={() =>handleUpdateMuscle(muscle)} key={muscle}>{muscle}</li>
              ))}
            {selectedFilter === FilterType.CHEST &&
            Object.values(CHEST)
              .filter((muscle) => muscle !== undefined)
              .map((muscle) => (
                <li onClick={() =>handleUpdateMuscle(muscle)} key={muscle}>{muscle}</li>
              ))}
            {selectedFilter === FilterType.BACKS &&
            Object.values(BACKS)
              .filter((muscle) => muscle !== undefined)
              .map((muscle) => (
                <li onClick={() =>handleUpdateMuscle(muscle)} key={muscle}>{muscle}</li>
              ))}
        </PriorityFilter>
      )}
      <ArrowDownIcon />
    </FilterByContainer>
  );
}
