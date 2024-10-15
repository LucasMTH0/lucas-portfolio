import styled from "styled-components";
export const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.7);
    border-radius: 12px;
    padding: 4px 8px;
    height: 18.75rem;
`
export const Title = styled.h1`
    font-size: ${({ theme }) => theme.font_size.L}px;
`

export const Bold = styled.strong`
    color: ${({ theme }) => theme.colors.gold};
    font-weight: bold;
`

export const Text = styled.p`
    padding: 2px;
    margin: 0;
`

export const ContainerExperiences = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 8px 0;
`