import React, { useContext } from 'react';
import { StyledButton } from '../../Button/StyledButton';
import {
  StyledContainer,
  StyledContainerForm,
  StyledSloganText,
} from '../../Container/StyledContainer';
import { StyledImage } from '../../Image/Image';
import { StyledInput } from '../../Input/StyledInput';
import { StyledForm, StyledFormLogo } from '../StyledForm';
import Bag from '../../../assets/shopping-bag.svg';
import Elipses from '../../../assets/Elipses.svg';
import Logo from '../../../assets/BurgerKenzie.svg';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { iFormLoginValues } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { formLoginSchema } from './FormLoginSchema';
import { UserContext } from '../../../contexts/UserContexts/UserContexts';

const FormLogin = () => {
  const {postRequestLogin} = useContext(UserContext)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLoginValues>({
    resolver: yupResolver(formLoginSchema),
  });

  const submitFormLogin: SubmitHandler<iFormLoginValues> = (data) => {
    postRequestLogin(data);
  };

  return (
    <StyledContainer minHeight={100} className="d-flex justify-content-center">
      <StyledContainerForm
        flexDirection="column-reverse"
        className="d-flex justify-content-center align-items-center justify-content-between"
      >
        <StyledForm
          className="d-flex flex-column"
          linkHeight={60}
          linkBackground={'--gray0'}
          linkFont={16}
          onSubmit={handleSubmit(submitFormLogin)}
        >
          <h2>Login</h2>

          <div>
            <StyledInput
              width="100%"
              backgroundColor="--gray0"
              placeholder="E-mail"
              {...register('email')}
            />
            {errors?.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <StyledInput
              width="100%"
              backgroundColor="--gray0"
              placeholder="Senha"
              type="password"
              {...register('password')}
            />
            {errors?.email && <p>{errors.email.message}</p>}
          </div>
          <StyledButton
            type="submit"
            color="--gray0"
            backgroundColor="--color-primary"
            height={48}
          >
            Logar
          </StyledButton>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <Link
            to={'/register'}
            className="link d-flex align-items-center justify-content-center"
          >
            Cadastrar
          </Link>
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

export default FormLogin;
