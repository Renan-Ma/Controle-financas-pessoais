import React, { useState } from "react";
import { categories } from "../../Data/Categories";
import { newDateAdjusted } from "../../Helpers/DateFilter";
import { Item } from "../../Types/Item";
import * as S from "./styled";

type Props = {
  onAdd: (item: Item) => void;
};

const InputArea = ({ onAdd }: Props) => {
  const today = new Date().toISOString().split("T")[0];
  const [dateField, setDateField] = useState(today);
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);


  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
      alert("Despesa cadastrada com sucesso!");
    }
  };

  const clearFields = () => {
    setDateField(today);
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };
  return (
    <S.Container>
      <S.InputLabel>
        <S.InputTitle>Data</S.InputTitle>
        <S.Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>Categoria</S.InputTitle>
        <S.Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </S.Select>
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>Título</S.InputTitle>
        <S.Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>Valor</S.InputTitle>
        <S.Input
          type="number"
          value={valueField}
          min="0"
          step="0.01"
          placeholder="0,00"
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>&nbsp;</S.InputTitle>
        <S.Button onClick={handleAddEvent}>Adicionar</S.Button>
      </S.InputLabel>
    </S.Container>
  );
};

export default InputArea;
