import React from "react";
import { formatCurrentMonth } from "../../Helpers/DateFilter";
import * as S from "./styled";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
};

const InfoArea = ({ currentMonth, onMonthChange }: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(
      `${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`
    );
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(
      `${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`
    );
  };
  return (
    <S.Container>
      <S.MonthArea>
        <S.MonthArrow onClick={handlePrevMonth}>ᐸ</S.MonthArrow>
        <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
        <S.MonthArrow onClick={handleNextMonth}>ᐳ</S.MonthArrow>
      </S.MonthArea>
      <S.ResumeArea></S.ResumeArea>
    </S.Container>
  );
};

export default InfoArea;
