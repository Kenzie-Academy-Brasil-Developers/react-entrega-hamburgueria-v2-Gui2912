import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  border: 1px solid var(--gray0);
  padding: 12px;
  gap: 25px;
  border-radius: 8px;
`;

export const StyledFormLogo = styled.div`
  width: 100%;
  max-width: 370px;
  align-items: flex-start;

  @media (max-width: 900px) {
    max-width: 500px;
    
    &.elipses {
      display: none;
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid var(--gray3);
  height: 60px;
  background-color: var(--gray0);
  border-radius: 8px;
  padding: 0 15px;
  font-size: 1rem;
  border: 2px solid var(--gray0);
  outline: none;

  :focus {
    border-color: green;
  }
`;
