import React from "react";
import { Item } from "../../Types/Item";
import * as S from "./styled"


type Props = {
  item: Item
}

const TableItem = ({item}: Props) => {
  return (
    <S.Container>
      <S.TableColumn>...</S.TableColumn>
      <S.TableColumn>{item.category}</S.TableColumn>
      <S.TableColumn>{item.title}</S.TableColumn>
      <S.TableColumn>R$ {item.value}</S.TableColumn>

      
    </S.Container>
  );
};

export default TableItem;
