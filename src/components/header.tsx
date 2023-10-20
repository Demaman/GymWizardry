"use client"

import {styled} from "styled-components"
import {Saira_Stencil_One} from 'next/font/google';
import { PrimaryWInputSearchIcon } from "./primary_input";
import { useFilter } from "@/hooks/use_filter";

const sairaStencil= Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

interface HeaderProps{

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    
    >div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: 768px){
        padding: 20px 160px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;

    @media (min-width: ${props => props.theme.DesktopBreakPoint}){
        font-size: 40px;
    }
`
 
export function Header(props: HeaderProps){
    const {setSearch, search} = useFilter();

    return (
        <TagHeader>
            <Logo className={sairaStencil.className}> WizardryGym </Logo>
            <div>
                <PrimaryWInputSearchIcon 
                value={search}
                handleChange={setSearch}
                placeholder="Looking for something?"
                />
            </div>
        </TagHeader>
    )
}