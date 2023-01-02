import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContexts/CartContexts';
import { ProductsContext } from '../../contexts/ProductsContexts/ProductsContexts';
import { StyledButton } from '../Button/StyledButton';
import { StyledFigure, StyledImage } from '../Image/Image';
import { StyledCard, StyledUl } from './StyledCard';

const Card = () => {
  const {addCart} = useContext(CartContext)
  const { products } = useContext(ProductsContext);

  return (
    <StyledUl className="d-flex wrap justify-content-between">
      {products.map((element) => (
        <StyledCard>
          <StyledFigure height={150} className="d-flex justify-content-center align-items-center">
            <StyledImage src={element.img}/>
          </StyledFigure>
          <div>
            <h2>{element.name}</h2>
            <p>{element.category}</p>
            <p className='price'>R$ {element.price.toFixed(2)}</p>
            <StyledButton backgroundColor="--gray1" color="--color-white" height={40} maxWidth={106} onClick={() => addCart(element)}>
              Adicionar
            </StyledButton>
          </div>
        </StyledCard>
      ))}
    </StyledUl>
  );
};

export default Card;
