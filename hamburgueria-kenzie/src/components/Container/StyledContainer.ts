import styled from 'styled-components';

interface iStyledContainer{
  backgroundColor?: string;
  minHeight?: number;
  padding?: number;
  maxWidth?: number;
  flexDirection?: string;
  
}

export const StyledContainer = styled.div<iStyledContainer>`
  width: 100%;
  min-height: ${({minHeight}) => minHeight + 'vh'};
  max-width: ${({maxWidth}) => maxWidth + 'px'};
`;

export const StyledContainerForm = styled.div<iStyledContainer>`
  max-width: 1000px;
  width: 100%;
  padding: 15px;

  @media (max-width: 900px) {
    flex-direction: ${({flexDirection}) => flexDirection};
    justify-content: center;
  }
`;


export const StyledWidthFullDiv = styled.div<iStyledContainer>`
  width: 100%;
  background-color: ${({backgroundColor}) => `var(${backgroundColor})`};
`;

export const StyledSloganText = styled.div`
  height: 95px;
  width: 100%;
  padding: 1.0625rem 0.875rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 30px 0;

  div {
    background-color: var(--gray0);
    margin-right: 1.1875rem;
    padding: 16px;
    border-radius: 8px;
  }

  p{
    color: var(--gray1);
    font-size: .875rem;
    text-align: justify;
  }
`;
