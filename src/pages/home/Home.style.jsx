import styled from "styled-components";
import Flex from "../../styles/Flex";

export const HomeContainer = styled(Flex)`
  flex-direction: column;
`;

export const HomeImg = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;

  img {
    width: 60%;
    max-height: 50vh;
    border-radius: 1rem;
    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      width: 80%;
    }
  }
`;

export const MainContainer = styled(Flex)`
  flex-direction: row;
`;
