import styled from "styled-components";

export const Container = styled.table`
  width: 90%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin: 1.875rem 4.375rem;
`;

export const TableColumn = styled.th<{ width?: number }>`  // "?"" faz ficar opicional o argumento
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: left;
`;
