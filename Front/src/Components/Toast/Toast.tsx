import React, { useEffect } from "react";
import * as S from "./styled";

type Props = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: Props) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <S.Container type={type}>{message}</S.Container>;
};

export default Toast;
