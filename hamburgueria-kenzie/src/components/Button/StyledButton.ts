import styled from "styled-components";

interface iStyledButton{
    backgroundColor: string;
    color: string,
    height: number
}

export const StyledButton = styled.button<iStyledButton>`
  width: 100%;
  background-color: ${({backgroundColor}) => `var(${backgroundColor})`};
  color: ${({color}) => `var(${color})`};
  border-radius: 8px;
  height: ${({height}) => height + 'px'};
  font-size: 1rem;
  font-weight: 700;

  :hover{
    filter: brightness(0.9);
  }
`