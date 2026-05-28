import React from "react";
import * as S from "./styled";

type Props = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = ({ message, onConfirm, onCancel }: Props) => {
  return (
    <S.Overlay>
      <S.Box>
        <S.Message>{message}</S.Message>
        <S.Actions>
          <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>Excluir</S.ConfirmButton>
        </S.Actions>
      </S.Box>
    </S.Overlay>
  );
};

export default ConfirmModal;
