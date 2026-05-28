import React from "react";
import { categories } from "../../Data/Categories";
import { formatCurrency, formatDate } from "../../Helpers/DateFilter";
import { Item } from "../../Types/Item";
import * as S from "./styled";

type Props = {
  item: Item;
  onDelete: (id: string) => void;
};

const TableItem = ({ item, onDelete }: Props) => {
  return (
    <S.Container>
      <S.TableColumn> {formatDate(item.date)} </S.TableColumn>
      <S.TableColumn>
        <S.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </S.Category>
      </S.TableColumn>
      <S.TableColumn>{item.title}</S.TableColumn>
      <S.TableColumn>
        <S.Value color={categories[item.category].expense ? "red" : "green"}>
          {formatCurrency(item.value)}
        </S.Value>
      </S.TableColumn>
      <S.TableColumn>
        <S.DeleteButton onClick={() => item.id && onDelete(item.id)}>✕</S.DeleteButton>
      </S.TableColumn>
    </S.Container>
  );
};

export default TableItem;
