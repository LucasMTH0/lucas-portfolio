import styled from "styled-components";

export const ContainerPresentation = styled.section`
    /* height: 100vh; */
    width: 100%;
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
    text-align: center;
`

export const SubTitle = styled.h2`
    font-size: 36px;
    text-align: center;
`

export const GoldBold = styled.strong`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gold};
`

export const DownloadButton = styled.button`
    background: transparent;
    border: 2px solid ${( {theme} ) => theme.colors.dark_gold};
    height: 1.8125rem;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${( {theme} ) => theme.colors.dark_gold};
    cursor: pointer;
    outline: none;
`

export const Image = styled.img`
    width: 100%;
    border-radius: 100%;
    border: 2px solid ${({ theme }) => theme.colors.dark_gold };
    overflow: hidden;
`
export const Link = styled.a `
    color: ${({ theme }) => theme.colors.dark_gold};
    font-size: 29px;
    margin: 2px 0;
    margin-right: 8px;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: ${({ theme }) => theme.colors.gold};

    }
`
