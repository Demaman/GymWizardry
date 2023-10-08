"use client"
import styled from "styled-components";
import { FilterByType } from "./filter_by_type";
import { FilterByMuscle } from "./filter_by_muscle_kind";
import { useState } from "react";
import { FilterType } from "@/constants/filter_types";

interface FilterBarProps{

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    background-color: var(--bg-secondary);
`
export function FilterBar(props: FilterBarProps) {
    const [selectedFilter, setSelectedFilter] = useState(FilterType.ALL);

    return (
        <FilterContainer>
            <FilterByType />
        </FilterContainer>
    )

}