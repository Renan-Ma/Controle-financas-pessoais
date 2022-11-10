import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebb365;
  height: 100vh;

  @media screen and (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
`;