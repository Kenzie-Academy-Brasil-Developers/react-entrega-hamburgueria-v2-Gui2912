import React, { useContext } from 'react';
import { StyledImage } from '../Image/Image';
import { StyledDivHeaderInput, StyledHeader } from './StyledHeader';
import Logo from '../../assets/BurgerKenzie.svg';
import { StyledWidthFullDiv } from '../Container/StyledContainer';
import { StyledInput } from '../Input/StyledInput';
import { StyledButton } from '../Button/StyledButton';
import { BiSearch } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { RxExit } from 'react-icons/rx';
import { UserContext } from '../../contexts/UserContexts/UserContexts';

const Header = () => {
  const { exit } = useContext(UserContext);

  return (
    <StyledWidthFullDiv
      backgroundColor="--gray0"
      className="d-flex justify-content-center"
    >
      <StyledHeader className="d-flex justify-content-between align-items-center">
        <StyledImage src={Logo} />
        <div className="d-flex justify-content-between align-items-center">
          <StyledDivHeaderInput>
            <StyledInput
              width="365px"
              backgroundColor="--color-white"
              type="text"
            />
            <StyledButton
              backgroundColor="--color-primary"
              color="--color-white"
              height={40}
              maxWidth={53}
            >
              <BiSearch />
            </StyledButton>
          </StyledDivHeaderInput>
          <StyledButton
            className="header-icon"
            id="cart-icon"
            backgroundColor="--gray0"
            color="--gray1"
            height={40}
            maxWidth={35}
          >
            <BsCart3 />
          </StyledButton>
          <StyledButton
            className="header-icon"
            id="exit-icon"
            backgroundColor="--gray0"
            color="--gray1"
            height={40}
            maxWidth={35}
            onClick={() => exit()}
          >
            <RxExit />
          </StyledButton>
        </div>
      </StyledHeader>
    </StyledWidthFullDiv>
  );
};

export default Header;
