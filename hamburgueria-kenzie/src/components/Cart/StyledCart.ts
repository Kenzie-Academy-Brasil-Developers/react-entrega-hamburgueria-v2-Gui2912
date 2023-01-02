import styled from 'styled-components';

export const StyledModalContainerBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  z-index: 4;
  left: 0;
  background-color: rgba(18, 18, 20, 0.5);
  padding: 0 15px;
`;

export const StyledModalContainer = styled.ul`
  max-width: 500px;
  width: 100%;
  height: max-content;
  min-height: 150px;
  background-color: var(--color-white);
  border-radius: 4px;

  .modal-header {
    background-color: var(--color-primary);
    text-align: end;
    padding: 15px;
    font-weight: 700;
    color: var(--color-white);
  }
`;

export const StyledLiCart = styled.li`
  width: 100%;
  height: 75px;
  padding: 15px;

  img {
    height: 100%;
    width: 4.4375rem;
    border-radius: 4px;
    background-color: var(--gray0);
    margin-right: 0.625rem;
    object-fit: cover;
  }
`;

export const StyledTotal = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 20px;
`
