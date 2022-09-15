import React from "react";
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
      <S.Value color={color}>R$ {value}</S.Value>
    </S.Container>
  );
};

export default ResumeItem;
