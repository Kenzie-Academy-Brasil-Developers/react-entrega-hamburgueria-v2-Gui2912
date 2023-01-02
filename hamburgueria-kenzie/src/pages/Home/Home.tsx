import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import { StyledContainer } from '../../components/Container/StyledContainer';
import Header from '../../components/Header/Header';
import { CartContext } from '../../contexts/CartContexts/CartContexts';

const Home = () => {
  const {openModal} = useContext(CartContext)


  return (
    <StyledContainer maxWidth={1350} minHeight={100} className='d-flex flex-column justify-content-center align-items-center'>
      {openModal && <Cart/>}
      <Header />
      <Card />
    </StyledContainer>
  );
};

export default Home;
