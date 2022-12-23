import React from 'react';
import { StyledImage } from '../Image/Image';
import { StyledHeader } from './StyledHeader';
import Logo from '../../assets/BurgerKenzie.svg';
import { StyledWidthFullDiv } from '../Container/StyledContainer';

const Header = () => {
  return (
    <StyledWidthFullDiv backgroundColor='--gray0' className='d-flex justify-content-center'>
      <StyledHeader className="d-flex justify-content-between align-items-center">
        <StyledImage src={Logo} />
        <div>
          <input type="text" />
        </div>
      </StyledHeader>
    </StyledWidthFullDiv>
  );
};

export default Header;
