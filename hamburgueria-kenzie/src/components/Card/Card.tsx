import React from 'react';
import { StyledWidthFullDiv } from '../Container/StyledContainer';
import { StyledFigure, StyledImage } from '../Image/Image';
import { StyledCard, StyledCardContainer } from './StyledCard';

const Card = () => {
  return (
    <StyledWidthFullDiv className="d-flex justify-content-center">
      <StyledCardContainer className="d-flex wrap justify-content-between">
        <StyledCard>
          <StyledFigure height={120}>
            <StyledImage />
          </StyledFigure>
          <h2>teste</h2>
        </StyledCard>
      </StyledCardContainer>
    </StyledWidthFullDiv>
  );
};

export default Card;
