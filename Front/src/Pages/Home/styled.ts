import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  background-color: darkblue;
  height: 150px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 16px;
`;

export const LogoutButton = styled.button`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  color: #888;
  margin-top: 40px;
  font-size: 14px;
`;

export const HeaderText = styled.h1`
  color: white;
  padding-top: 30px;
`;

export const Body = styled.div`margin: auto;
max-width: 980px;
margin-bottom: 50px;`;
