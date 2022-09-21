import React, { useEffect, useState } from "react";
import * as S from "./AppStyled";
import InfoArea from "./Components/InfoArea/InfoArea";
import InputArea from "./Components/InputArea/InputArea";
import Table from "./Components/Table/Table";
import { categories } from "./Data/Categories";
import { itens } from "./Data/Itens";
import { filterListByMonth, getCurrentMoth } from "./Helpers/DateFilter";
import { Item } from "./Types/Item";

function App() {
  const [list, setList] = useState(itens);
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMoth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filterList) {
      if (categories[filterList[i].category].expense) {
        expenseCount += filterList[i].value;
      } else {
        incomeCount += filterList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filterList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>
      <S.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <Table list={filterList} />
      </S.Body>
    </S.Container>
  );
}

export default App;
