import styled from "styled-components";

export const Container = styled.tr``;

export const TableColumn = styled.td``;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  color: darkblue;
  cursor: pointer;
  font-size: 16px;
  padding: 2px 6px;
  border-radius: 4px;
  &:hover {
    background-color: #eef;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 16px;
  padding: 2px 6px;
  border-radius: 4px;
  &:hover {
    background-color: #fdecea;
  }
`;
