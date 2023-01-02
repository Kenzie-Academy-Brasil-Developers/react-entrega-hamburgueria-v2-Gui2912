import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../providers/api';
import { iProviderProps, iUser, iUserLogin } from './types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext({} as any);

export const UserContextProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const postRequestRegister = async (data: iUser) => {
    try {
      const response = await api.post('users', data);
      toast.success(
        'Cadastro feito com sucesso, você será redirecionado em breve !',
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          theme: 'colored',
        }
      );
      setTimeout(() => navigate('/'), 2000);

      return response;
    } catch (error) {
      toast.error('Algo deu errado, tente novamente :(', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        theme: 'colored',
      });
    }
  };

  const postRequestLogin = async (data: iUserLogin) => {
    try {
      const response = await api.post('login', data);
      const token = response.data.accessToken;
      localStorage.setItem('@UserToken', token);
      setUser(token);
      toast.success(
        'Login feito com sucesso, você será redirecionado em breve !',
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          theme: 'colored',
        }
      );
      setTimeout(() => navigate('/home'), 2000);
    } catch (error) {
      toast.error('Algo deu errado, tente novamente :(', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        theme: 'colored',
      });
    }
  };

  const exit = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{ postRequestRegister, postRequestLogin, exit, user }}
    >
      {children}
    </UserContext.Provider>
  );
};
