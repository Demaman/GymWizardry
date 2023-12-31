"use client"

import {styled} from "styled-components"
import {Saira_Stencil_One} from 'next/font/google';
import { PrimaryWInputSearchIcon } from "./primary_input";
import { InputHTMLAttributes } from "react";
import { FilterByMuscle } from "./filter_by_muscle_kind";

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
    padding: 20px 40px;
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`
 
export function Header(props: HeaderProps){
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}> WizardryGym </Logo>
            <PrimaryWInputSearchIcon placeholder="Pesquisando por algo?"/>
        </TagHeader>
    )
}