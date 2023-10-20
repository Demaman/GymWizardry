import styled from "styled-components";
import { SearchIcont } from "./search_icont";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: 8px;
    padding: 10px 16px;
    border: none;
    background: var(--bg-thirdy);
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);

    @media(min-width: ${props => props.theme.DesktopBreakPoint}){
        line-height: 22px;
        font-size: 14px;
    }

`

const InputContainer = styled.div`
    position: relative;
    widht: 250px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    
    @media(min-width: ${props => props.theme.DesktopBreakPoint}){
        width: 352px;
    }
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string,
    handleChange: (value: string) => void
}


export function PrimaryWInputSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput onChange={(event) => props.handleChange(event.target.value)} {...props} />
            <SearchIcont></SearchIcont>
        </InputContainer>
    )
}
