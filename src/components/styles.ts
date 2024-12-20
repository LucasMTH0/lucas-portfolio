import { DiAngularSimple } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import styled from "styled-components";

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.dark_gold};
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
`

export const Link = styled.a `
    color: ${({ theme }) => theme.colors.dark_gold};
    font-size: 35px;
    margin: 2px 0;
    margin-right: 20px;
    cursor: pointer;
    text-decoration: none;
    
    &:hover{
        color: ${({ theme }) => theme.colors.gold};

    }
`





export const Angular = styled(DiAngularSimple)`
    color: #B52E31;
    font-size: 35px;
    cursor: pointer;
`

export const Typescript = styled(SiTypescript)`
    color: #007acc;
    font-size: 35px;
    cursor: pointer;
`

export const Ionic = styled(IoLogoIonic)`
    color: #0054e9;
    font-size: 35px;
    cursor: pointer;
    &:hover{
        
    }
`

export const Sass = styled(FaSass)`
    color: #cc6699;
    font-size: 35px;
    cursor: pointer;
`

export const Tailwind = styled(SiTailwindcss)`
    color: #a5f3fc;
    font-size: 35px;
    cursor: pointer;
`

export const Javascript = styled(SiTypescript)`

`

export const Html = styled(FaHtml5)`
    color: #E34C26;
    cursor: pointer;
`
export const Css = styled(FaCss3Alt)`

`