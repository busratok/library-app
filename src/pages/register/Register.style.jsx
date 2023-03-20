import styled from "styled-components";

export const RegisterContainer = styled.div`
  margin: 2rem auto;
  max-width: 70vw;
  img {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    max-width: 90vw;
  }
`;
