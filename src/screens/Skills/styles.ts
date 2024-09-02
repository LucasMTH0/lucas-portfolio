 
import styled, { css } from "styled-components"

export const ContainerSkills = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
export const Card = styled.div`
    padding: 10px;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.dark_gold};
        color: ${theme.colors.dark_gold};
        &:hover{
            border: 1px solid ${theme.colors.gold};
            color: ${theme.colors.gold};
        }
    `}

`