import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContexts/CartContexts';
import { StyledButton } from '../Button/StyledButton';
import { StyledImage } from '../Image/Image';
import {
  StyledLiCart,
  StyledModalContainer,
  StyledModalContainerBackground,
  StyledTotal,
} from './StyledCart';
import { BsTrash } from 'react-icons/bs';

const Cart = () => {
  const { openCart, cart, exclueItem, removeAllCartItems, total } =
    useContext(CartContext);

  return (
    <StyledModalContainerBackground className="d-flex flex-column justify-content-center align-items-center">
      <StyledModalContainer>
        <div className="modal-header d-flex justify-content-between">
          <h2>Carrinho de compras</h2>
          <StyledButton
            backgroundColor="--color-primary"
            color="--color-white"
            height={15}
            maxWidth={15}
            onClick={() => openCart()}
          >
            X
          </StyledButton>
        </div>
        {cart.length !== 0 ? (
          cart.map((element: any) => (
            <StyledLiCart className="d-flex justify-content-between">
              <div className="d-flex">
                <StyledImage src={element.img} alt="" />
                <p>{element.name}</p>
              </div>
              <StyledButton
                backgroundColor="--color-white"
                color="--gray1"
                height={23}
                maxWidth={26}
                className="trash-icons"
                onClick={() => exclueItem(element)}
              >
                <BsTrash />
              </StyledButton>
            </StyledLiCart>
          ))
        ) : (
          <h2 className='text-center'>Nenhum item adicionado ao carrinho</h2>
        )}
        {cart.length !== 0 && (
          <StyledTotal className="d-flex flex-column justify-content-around">
            <div className="d-flex justify-content-between total">
              <h3>Total</h3>
              <p>{`R$ ${total.toFixed(2)}`}</p>
            </div>
            <StyledButton
              backgroundColor="--gray0"
              color="--gray1"
              height={40}
              onClick={removeAllCartItems}
            >
              Remover Todos
            </StyledButton>
          </StyledTotal>
        )}
      </StyledModalContainer>
    </StyledModalContainerBackground>
  );
};

export default Cart;
