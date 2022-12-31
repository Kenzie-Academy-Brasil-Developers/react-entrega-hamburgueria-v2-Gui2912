import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../providers/api';
import { iProviderProps, iUser, iUserLogin, iUserProviderValue } from './types';

export const UserContext = createContext({} as iUserProviderValue);

export const UserContextProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const postRequestRegister = async (data: iUser) => {
    try {
      const response = await api.post('users', data);
      navigate('/');
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const postRequestLogin = async (data: iUserLogin) => {
    try {
      const response = await api.post('login', data);
      const token = response.data.accessToken   
      localStorage.setItem('@UserToken' , token)
      setUser(token)
      navigate('/home') 
    } catch (error) {
      console.log(error);
    }
  };

  const exit = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <UserContext.Provider value={{ postRequestRegister, postRequestLogin, exit }}>
      {children}
    </UserContext.Provider>
  );
};
