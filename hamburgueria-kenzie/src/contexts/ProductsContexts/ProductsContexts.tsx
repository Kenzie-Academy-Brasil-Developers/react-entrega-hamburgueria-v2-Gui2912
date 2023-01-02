import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { api } from '../../providers/api';
import { iProviderProps } from '../UserContexts/types';
import { iProducts, iProductsValue } from './types';

export const ProductsContext = createContext({} as iProductsValue);

export const ProductsContextProvider = ({ children }: iProviderProps) => {
  const token = localStorage.getItem('@UserToken');
  const [products, setProducts] = useState<iProducts[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get('products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [token]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
