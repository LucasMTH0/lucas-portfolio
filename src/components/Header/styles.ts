import styled, { css } from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    padding: 12px;
`

export const ContainerLinks = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
`

export const Item = styled.li`
    text-decoration: none;
    list-style: none;
    padding: 4px 0;
    cursor: pointer;
    border: 1px solid transparent;
    ${({ theme }) => css`
        color: ${theme.colors.dark_gold};
        font-size: ${theme.font_size.L};
    `}
    &:hover{
        border-bottom: 1px solid ${({ theme }) => theme.colors.dark_gold};
    }
`

export const LogoImage = styled.img`
    cursor: pointer;
    height: 95px;
`
