import styled from "styled-components";

interface iStyledImage{
  width?: number;
}

interface iStyledFigure{
  height: number;
}

export const StyledImage = styled.img`
  
`

export const StyledFigure = styled.figure<iStyledFigure>`
  width: 100%;
  height: ${({height}) => height + 'px'};
`