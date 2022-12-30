import React from 'react';
import { StyledButton } from '../../../components/Button/StyledButton';
import {
  StyledContainer,
  StyledContainerForm,
  StyledSloganText,
  StyledWidthFullDiv,
} from '../../../components/Container/StyledContainer';
import {
  StyledForm,
  StyledFormLogo,
} from '../../../components/Form/StyledForm';
import { StyledImage } from '../../../components/Image/Image';
import Logo from '../../../assets/BurgerKenzie.svg';
import Bag from '../../../assets/shopping-bag.svg';
import Elipses from '../../../assets/Elipses.svg';
import { Link } from 'react-router-dom';
import {
  StyledErrorInputMessage,
  StyledInput,
} from '../../../components/Input/StyledInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formRegisterSchema } from './FormRegisterSchema';
import { iFormValues } from './types';

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormValues>({
    resolver: yupResolver(formRegisterSchema),
  });

  const submitForm: SubmitHandler<iFormValues> = (data) => {
    
    const registerValues = {
      name: data.name,
      email: data.email,
      password: data.password
    }

    console.log(registerValues);
  };

  return (
    <StyledContainer minHeight={100} className="d-flex justify-content-center">
      <StyledContainerForm
        flexDirection="column-reverse"
        className="d-flex justify-content-center align-items-center justify-content-between"
      >
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
        <StyledForm
          className="d-flex flex-column "
          linkHeight={30}
          linkFont={14}
          onSubmit={handleSubmit(submitForm)}
        >
          <StyledWidthFullDiv className="d-flex justify-content-between">
            <h2>Cadastro</h2>
            <Link to={'/'} className="link">
              Retornar para o Login
            </Link>
          </StyledWidthFullDiv>
          <div>
            <StyledInput
              type="text"
              width="100%"
              backgroundColor="--gray0"
              placeholder="Nome"
              
              {...register('name')}
            />
            {errors?.name && (
              <StyledErrorInputMessage>
                {errors.name.message}
              </StyledErrorInputMessage>
            )}
          </div>
          <div>
            <StyledInput
              width="100%"
              backgroundColor="--gray0"
              placeholder="E-mail"
              type="email"
              {...register('email')}
            />
            {errors?.email && (
              <StyledErrorInputMessage>
                {errors.email.message}
              </StyledErrorInputMessage>
            )}
          </div>
          <div>
            <StyledInput
              width="100%"
              backgroundColor="--gray0"
              placeholder="Senha"
              type="password"
              {...register('password')}
            />
            {errors?.password && (
              <StyledErrorInputMessage>
                {errors.password.message}
              </StyledErrorInputMessage>
            )}
          </div>
          <div>
            <StyledInput
              width="100%"
              backgroundColor="--gray0"
              placeholder="Confirme sua senha"
              type="password"
              {...register('confirmPassword')}
            />
            {errors?.confirmPassword && (
              <StyledErrorInputMessage>
                {errors.confirmPassword.message}
              </StyledErrorInputMessage>
            )}
          </div>
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

export default FormRegister;
