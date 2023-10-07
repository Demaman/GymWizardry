"use client"
import styled from "styled-components";

interface FilterByTypeProps{

}

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

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)': ''};
`

export function FilterByType(){
    return(
        <FilterList>
            <FilterItem selected={true}> Todos os exercícios</FilterItem>
            <FilterItem selected={false}> Perna</FilterItem>
            <FilterItem selected={false}> Peito</FilterItem>
            <FilterItem selected={false}> Costas</FilterItem>
            <FilterItem selected={false}> Biceps e Triceps</FilterItem>
            <FilterItem selected={false}> Ombros</FilterItem>
        </FilterList>
    )
}