import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    padding: 15px 20px;
`

export const ContentPresentation = styled.div`
    width: 50%;
`

export const ContainerLinks = styled.div`
    display: flex;
    gap: 20px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const GoldBold = styled.strong`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gold};
`

export const Image = styled.img`
    height: 180px;
    width: 180px;
    border-radius: 100%;
    border: 2px solid ${({ theme }) => theme.colors.dark_gold };
    overflow: hidden;
`
export const Link = styled.a `
    color: ${({ theme }) => theme.colors.dark_gold};
    font-size: 25px;
    margin: 2px 0;
    margin-right: 8px;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: ${({ theme }) => theme.colors.gold};

    }
`
