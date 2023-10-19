"use client"
import { FilterType } from "@/constants/filter_types";
import { useFilter } from "@/hooks/use_filter";
import styled from "styled-components";
import { FilterByMuscle } from "./filter_by_muscle_kind";
import { useContext } from "react";
import { FilterContext } from "@/contexts/filter_context";

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
    const { category, setCategory } = useContext(FilterContext);
    const HandleChangeType = (value: FilterType) => {
      setCategory(value);
    }

  
    return (
      <FilterList>
            <FilterItem 
                selected={category === FilterType.ALL} 
                onClick={() => HandleChangeType(FilterType.ALL)}>
                    ALL EXERCISES
            </FilterItem>
            <FilterItem 
                selected={category === FilterType.LEGS } 
                onClick = {() => HandleChangeType(FilterType.LEGS)}>
                    LEGS
            </FilterItem>
            <FilterItem 
                selected={category === FilterType.CHEST } 
                onClick = {() => HandleChangeType(FilterType.CHEST)}>
                    CHEST
            </FilterItem>
            <FilterItem 
                selected={category === FilterType.BACKS } 
                onClick = {() => HandleChangeType(FilterType.BACKS)}> 
                    BACKS
            </FilterItem>
            <FilterItem 
                selected={category === FilterType.ARMS}
                onClick = {() => HandleChangeType(FilterType.ARMS)}>
                    BICEPS AND TRICEPS
            </FilterItem>
            <FilterItem 
                selected={category === FilterType.SHOULDERS } 
                onClick = {() => HandleChangeType(FilterType.SHOULDERS)}>
                    &nbsp;
                    SHOULDERS
            </FilterItem>
        </FilterList>
    )
}