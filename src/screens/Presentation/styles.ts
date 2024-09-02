import styled, { css } from "styled-components";

export const ContainerPresentation = styled.section`
    /* height: 100vh; */
    width: 100%;
    margin-block: 2rem;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
`

export const ContentPresentation = styled.div`
    width: 50%;
`

export const ContainerLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Title = styled.h1`
    font-size: 48px;
    margin-block: 5px;
    text-align: center;
`

export const SubTitle = styled.h2`
    font-size: 36px;
    margin-block: 5px;
    text-align: center;
`

export const Description = styled.h3`
    text-align: center;
`

export const GoldBold = styled.strong`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gold};
`

export const DownloadButton = styled.button`
    background: transparent;
    border: 2px solid ${( {theme} ) => theme.colors.dark_gold};
    height:40px;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    gap: 14px;
    align-items: center;
    color: ${( {theme} ) => theme.colors.dark_gold};
    cursor: pointer;
    outline: none;
    &:hover {
        ${({ theme }) => css`
            border: 2px solid ${ theme.colors.gold };
            color: ${ theme.colors.gold};
        `}
    }
`

export const Image = styled.img`
    /* width: 100%; */
    width: 465px;
    border-radius: 100%;
    border: 2px solid ${({ theme }) => theme.colors.dark_gold };
    overflow: hidden;
`
export const Link = styled.a `
    color: ${({ theme }) => theme.colors.dark_gold};
    font-size: 35px;
    margin: 2px 0;
    margin-right: 8px;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: ${({ theme }) => theme.colors.gold};

    }
`
