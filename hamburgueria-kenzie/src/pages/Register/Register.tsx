import React from 'react';
import { StyledButton } from '../../components/Button/StyledButton';
import {
  StyledContainer,
  StyledContainerForm,
  StyledSloganText,
  StyledWidthFullDiv,
} from '../../components/Container/StyledContainer';
import {
  StyledForm,
  StyledFormLogo,
  StyledInput,
} from '../../components/Form/StyledForm';
import { StyledImage } from '../../components/Image/Image';
import Logo from '../../assets/BurgerKenzie.svg';
import Bag from '../../assets/shopping-bag.svg';
import Elipses from '../../assets/Elipses.svg';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <StyledContainer minHeight={100} className="d-flex justify-content-center">
      <StyledContainerForm className="d-flex justify-content-center align-items-center justify-content-between">
        <StyledFormLogo className="d-flex flex-column">
          <StyledImage src={Logo} alt="" />
          <StyledSloganText className="d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <StyledImage src={Bag} />
            </div>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os
              <strong> melhores </strong>
              <p>ingredientes.</p>
            </p>
          </StyledSloganText>
          <StyledImage src={Elipses} className="elipses" />
        </StyledFormLogo>
        <StyledForm className='d-flex flex-column'>
          <StyledWidthFullDiv className="d-flex justify-content-between">
            <h2>Cadastro</h2>
            <Link to={'/'}>Retornar para o Login</Link>
          </StyledWidthFullDiv>

          <StyledInput placeholder="Nome" />

          <StyledInput placeholder="E-mail" type="email" />

          <StyledInput placeholder="Senha" type="password" />

          <StyledInput placeholder="Confirme sua senha" type="password" />

          <StyledButton
            type="submit"
            color="--gray1"
            backgroundColor="--gray0"
            height={60}
          >
            Cadastrar
          </StyledButton>
        </StyledForm>
      </StyledContainerForm>
    </StyledContainer>
  );
};

export default Register;
