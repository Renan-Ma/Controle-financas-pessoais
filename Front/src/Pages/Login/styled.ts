import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const Header = styled.div`
  background-color: darkblue;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 28px;
  letter-spacing: 1px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 24px 16px;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const CardTitle = styled.h2`
  text-align: center;
  margin-bottom: 28px;
  color: darkblue;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonStyled = styled.button`
  margin-top: 8px;
  padding: 12px;
  background-color: darkblue;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #00008b;
  }
`;

export const Footer = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`;

export const ButtonRegistration = styled.button`
  border: none;
  background: none;
  color: darkblue;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
`;
