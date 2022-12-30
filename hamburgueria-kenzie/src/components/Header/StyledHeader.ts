import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 80%;
  max-width: 1350px;
  padding: 0 15px;
  height: 80px;
  background-color: transparent;
  color: var(--gray1);

  img {
    height: 35px;
    width: 150px;
  }

  .header-icon {
    width: 55px;
    height: 40px;
    border-radius: 0;
    margin-left: 5px;
    border-radius: 8px;
  }

  .header-icon:hover {
    color: var(--color-white);
  }

  #exit-icon:hover {
    background-color: red;
  }

  #cart-icon:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

export const StyledInputHeader = styled.input`
  width: 100%;
  position: absolute;
`;

export const StyledDivHeaderInput = styled.div`
  position: relative;
  width: 100%;
  max-width: 365px;
  height: 60px;

  button {
    position: absolute;
    z-index: 2;
    right: 21px;
    top: 12px;
  }
`;
