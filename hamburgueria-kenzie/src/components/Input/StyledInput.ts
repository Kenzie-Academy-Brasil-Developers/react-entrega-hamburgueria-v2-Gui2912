import styled from 'styled-components';

interface iStyledInput {
  width: string;
  backgroundColor: string;
}

export const StyledInput = styled.input<iStyledInput>`
  width: ${({ width }) => width};
  border-radius: 8px;
  height: 60px;
  border: 1px solid var(--gray3);
  height: 60px;
  background-color: ${({backgroundColor}) => `var(${backgroundColor})`};
  border-radius: 8px;
  padding: 0 15px;
  font-size: 1rem;
  border: 2px solid var(--gray0);
  outline: none;

  :focus {
    border-color: green;
  }
`;

export const StyledErrorInputMessage = styled.p`
  color: var(--color-secundary);
  font-size: 15px;
  margin-top: 5px;
  font-weight: 700;
`
