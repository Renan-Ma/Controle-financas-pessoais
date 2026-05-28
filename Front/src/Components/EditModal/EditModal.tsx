import React, { useState } from "react";
import { categories } from "../../Data/Categories";
import { Item } from "../../Types/Item";
import * as S from "./styled";

type Props = {
  item: Item;
  onSave: (item: Item) => void;
  onCancel: () => void;
};

const EditModal = ({ item, onSave, onCancel }: Props) => {
  const [dateField, setDateField] = useState(
    item.date.toISOString().split("T")[0]
  );
  const [categoryField, setCategoryField] = useState(item.category);
  const [titleField, setTitleField] = useState(item.title);
  const [valueField, setValueField] = useState(item.value);

  const categoryKeys = Object.keys(categories);

  const handleSave = () => {
    let [year, month, day] = dateField.split("-");
    onSave({
      ...item,
      date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
      category: categoryField,
      title: titleField,
      value: valueField,
    });
  };

  return (
    <S.Overlay>
      <S.Box>
        <S.Title>Editar despesa</S.Title>
        <S.Field>
          <S.Label>Data</S.Label>
          <S.Input
            type="date"
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
          />
        </S.Field>
        <S.Field>
          <S.Label>Categoria</S.Label>
          <S.Select
            value={categoryField}
            onChange={(e) => setCategoryField(e.target.value)}
          >
            {categoryKeys.map((key) => (
              <option key={key} value={key}>
                {categories[key].title}
              </option>
            ))}
          </S.Select>
        </S.Field>
        <S.Field>
          <S.Label>Título</S.Label>
          <S.Input
            type="text"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
          />
        </S.Field>
        <S.Field>
          <S.Label>Valor</S.Label>
          <S.Input
            type="number"
            value={valueField}
            min="0"
            step="0.01"
            onChange={(e) => setValueField(parseFloat(e.target.value))}
          />
        </S.Field>
        <S.Actions>
          <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>
          <S.SaveButton onClick={handleSave}>Salvar</S.SaveButton>
        </S.Actions>
      </S.Box>
    </S.Overlay>
  );
};

export default EditModal;
