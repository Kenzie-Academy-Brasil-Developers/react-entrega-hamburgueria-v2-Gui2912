import { createContext, useState } from 'react';
import { iProducts } from '../ProductsContexts/types';
import { iProviderProps } from '../UserContexts/types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext({} as any);

export const CartContextProvider = ({ children }: iProviderProps) => {
  const [cart, setCart] = useState<iProducts[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [total, setTotal] = useState(0);

  const openCart = () => {
    setOpenModal(!openModal);
  };

  const addCart = (element: iProducts) => {
    const filteredCart = cart.some((cartElt) => cartElt.id === element.id);

    if (!filteredCart) {
      toast.success('Produto adicionado com sucesso ao carrinho', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        theme: 'colored',
      });
      setCart([...cart, element]);
      setTotal((prevState) => prevState + element.price);
    } else {
      toast.error('Item já adicionado ao carrinho', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        theme: 'colored',
      });
    }
  };

  const exclueItem = (e: iProducts) => {
    const filteredItem = cart.filter((element) => element.id !== e.id);
    setCart(filteredItem);
    setTotal((prevState) => prevState - e.price);
  };

  const removeAllCartItems = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addCart,
        openModal,
        openCart,
        cart,
        exclueItem,
        removeAllCartItems,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
