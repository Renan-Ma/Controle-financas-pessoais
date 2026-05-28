import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin: 1.875rem 0;
  border-collapse: collapse;
  display: table;

  @media (max-width: 600px) {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const TableColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 8px;
  text-align: left;

  @media (max-width: 600px) {
    padding: 8px 6px;
    font-size: 13px;
  }
`;
