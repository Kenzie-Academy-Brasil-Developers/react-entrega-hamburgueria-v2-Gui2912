import styled from "styled-components";

interface iStyledButton{
    backgroundColor: string;
    color: string;
    height: number;
    maxWidth?: number;
    padding?: number;
}

export const StyledButton = styled.button<iStyledButton>`
  width: 100%;
  max-width: ${({maxWidth}) => maxWidth + 'px'};
  background-color: ${({backgroundColor}) => `var(${backgroundColor})`};
  color: ${({color}) => `var(${color})`};
  border-radius: 8px;
  height: ${({height}) => height + 'px'};
  font-size: 1rem;
  font-weight: 700;
  padding: ${({padding}) => padding + 'px'};
  text-align: center;

  :hover{
    filter: brightness(0.9);
  }
`