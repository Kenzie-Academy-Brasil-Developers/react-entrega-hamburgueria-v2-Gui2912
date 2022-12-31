import React from 'react';

export interface iProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  name: string;
  email: string;
  password: string;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserProviderValue {
  postRequestRegister: (data: iUser) => void;
  postRequestLogin: (data: iUserLogin) => void;
  exit : () => void;
}
