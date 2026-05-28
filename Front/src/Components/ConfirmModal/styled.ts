import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Box = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  min-width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Message = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const CancelButton = styled.button`
  padding: 8px 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #f5f5f5;
  }
`;

export const ConfirmButton = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  background: #e74c3c;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #c0392b;
  }
`;
