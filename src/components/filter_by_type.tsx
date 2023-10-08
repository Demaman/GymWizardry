"use client"
import { FilterType } from "@/constants/filter_types";
import { useFilter } from "@/hooks/use_filter";
import styled from "styled-components";
import { FilterByMuscle } from "./filter_by_muscle_kind";

interface FilterItemProps{
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px
`
const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' :'400'};
    font-style: normal;
    display: flex;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-dark);
    cursor: pointer; 

    border-bottom: ${props => props.selected ? '4px solid var(--logo-color)': ''};
`

export function FilterByType() {
    const { type, setType } = useFilter();
  
    const HandleChangeType = (value: FilterType) => {
      setType(value);
    }
  
    return (
      <FilterList>
            <FilterItem 
                selected={type === FilterType.ALL} 
                onClick={() => HandleChangeType(FilterType.ALL)}>
                    Todos os exercícios
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.LEGS } 
                onClick = {() => HandleChangeType(FilterType.LEGS)}>
                    Pernas
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.CHEST } 
                onClick = {() => HandleChangeType(FilterType.CHEST)}>
                    Peito
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.BACKS } 
                onClick = {() => HandleChangeType(FilterType.BACKS)}> 
                    Costas
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.ARMS}
                onClick = {() => HandleChangeType(FilterType.ARMS)}>
                    Biceps e Triceps
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.SHOULDERS } 
                onClick = {() => HandleChangeType(FilterType.SHOULDERS)}>
                     Ombros
            </FilterItem>
            <FilterByMuscle selectedFilter={type} />
        </FilterList>
    )
}