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
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    padding: 24px 16px;
    border-radius: 0;
    max-width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h3`
  margin-bottom: 24px;
  color: darkblue;
  font-size: 18px;
`;

export const Field = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 8px;
  border: 1px solid lightblue;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const Select = styled.select`
  width: 100%;
  height: 36px;
  padding: 0 8px;
  border: 1px solid lightblue;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
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

export const SaveButton = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  background: darkblue;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #00008b;
  }
`;
