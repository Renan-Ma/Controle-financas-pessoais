import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin: 1.875rem 0;
  margin-top: -40px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    margin-top: -30px;
  }
`;

export const MonthArea = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  display: flex;
  flex: 2;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-around;
  }
`;
