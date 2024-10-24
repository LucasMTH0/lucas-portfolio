import styled from "styled-components";
export const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 1px 3px 1px;
    border-radius: 12px;
    padding: 4px 8px;

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