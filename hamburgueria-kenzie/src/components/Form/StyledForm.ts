import styled from 'styled-components';

interface iForm {
  linkHeight: number;
  linkFont: number;
  linkBackground?: string;
}

export const StyledForm = styled.form<iForm>`
  width: 100%;
  max-width: 500px;
  border: 1px solid var(--gray0);
  padding: 12px;
  gap: 25px;
  border-radius: 8px;

  .link {
    text-decoration: none;
    color: var(--gray1);
    background-color: ${({linkBackground}) => `var(${linkBackground})`};
    height: ${({ linkHeight }) => linkHeight + 'px'};
    font-size: ${({ linkFont }) => linkFont + 'px'};
    font-weight: 600;
  }

  .link:hover {
    filter: brightness(0.9);
  }
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
