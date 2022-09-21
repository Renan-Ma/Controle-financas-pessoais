import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin: 1.875rem 4.375rem;
  display: flex;
  align-items: center;
`;
export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
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
`;
export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
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
