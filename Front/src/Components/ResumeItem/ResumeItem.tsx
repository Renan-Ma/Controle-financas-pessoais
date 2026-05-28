import React from "react";
import { formatCurrency } from "../../Helpers/DateFilter";
import * as S from "./styled";

type Props = {
  title: string;
  value: number;
  color?: string;
};

const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Value color={color}>{formatCurrency(value)}</S.Value>
    </S.Container>
  );
};

export default ResumeItem;
