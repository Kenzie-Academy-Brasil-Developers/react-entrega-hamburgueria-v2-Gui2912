import React from 'react';
import { StyledContainer, StyledContainerForm, StyledSloganText } from '../../components/Container/StyledContainer';
import {
  StyledForm,
  StyledFormLogo,
  StyledInput,
} from '../../components/Form/StyledForm';
import Bag from '../../assets/shopping-bag.svg';
import Elipses from '../../assets/Elipses.svg';
import Logo from '../../assets/BurgerKenzie.svg';
import { StyledImage } from '../../components/Image/Image';
import { StyledButton } from '../../components/Button/StyledButton';

const Login = () => {
  return (
    <StyledContainer minHeight={100} className="d-flex justify-content-center">
      <StyledContainerForm className="d-flex justify-content-center align-items-center justify-content-between">
        <StyledForm className='d-flex flex-column'>
          <h2>Login</h2>

          <div>
            <label>E-mail</label>
            <StyledInput placeholder="E-mail" />
          </div>

          <StyledInput placeholder="Senha" />
          <StyledButton
            type="submit"
            color="--gray0"
            backgroundColor="--color-primary"
            height={48}
          >
            Logar
          </StyledButton>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <StyledButton color="--gray1" backgroundColor="--gray0" height={48}>
            Cadastrar
          </StyledButton>
        </StyledForm>
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
          <StyledImage src={Elipses} />
        </StyledFormLogo>
      </StyledContainerForm>
    </StyledContainer>
  );
};

export default Login;
