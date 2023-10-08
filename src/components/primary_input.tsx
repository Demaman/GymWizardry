import styled from "styled-components";
import { SearchIcont } from "./search_icont";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    padding: 10px 16px;
    border: none;
    background: var(--bg-thirdy);
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    widht: 352px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}


export function PrimaryWInputSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput {...props} />
            <SearchIcont></SearchIcont>
        </InputContainer>
    )
} 