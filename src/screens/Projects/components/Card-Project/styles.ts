import styled, { css } from "styled-components";

export const ImageProject = styled.img`
  width: 100%;
`;

export const Description = styled.h2`
  font-size: 17px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.dark_gold};
  font-size: 19px;
  margin: 2px 0;
  margin-right: 8px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ButtonLink = styled.button`
  text-decoration: none;
  background-color: transparent;
  padding: 4px 0;
  cursor: pointer;
  border: 1px solid transparent;
  ${({ theme }) => css`
    color: ${theme.colors.dark_gold};
    font-size: ${theme.font_size.L};
  `}
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark_gold};
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
