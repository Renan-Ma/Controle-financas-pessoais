import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin: 1.875rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
  min-width: 120px;

  @media (max-width: 600px) {
    margin: 6px 0;
  }
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
