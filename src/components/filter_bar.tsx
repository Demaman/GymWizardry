import React, { useContext } from "react";
import styled from "styled-components";
import { FilterByType } from "./filter_by_type";
import { FilterByMuscle } from "./filter_by_muscle_kind";
import { FilterContext } from "@/contexts/filter_context";

interface FilterBarProps {}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  background-color: var(--bg-secondary);
  padding-right: 80px;
  justify-content: space-between;
`;

export function FilterBar(props: FilterBarProps) {
    const { category } = useContext(FilterContext);
    return (
    <FilterContainer>
      <FilterByType />
      <FilterByMuscle selectedFilter={category}/>
    </FilterContainer>
  );
}
