import styled from "styled-components";
import { Button } from "@mui/material";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export const Title = styled.p`
  background-color: darkblue;
  text-align: center;
  font-size: 100px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 30%;
  justify-content: space-evenly;
`;

export const ButtonStyled = styled(Button)`
  && {
    margin: 10px 5px 0 5px;
    background-color: #e86e5a;
    color: #000000;
    width: 100%;
  }
`;
