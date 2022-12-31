import React from 'react';
import Card from '../../components/Card/Card';
import { StyledContainer } from '../../components/Container/StyledContainer';
import Header from '../../components/Header/Header';

const Home = () => {

  return (
    <StyledContainer minHeight={100}>
      <Header />
      <Card />
    </StyledContainer>
  );
};

export default Home;
