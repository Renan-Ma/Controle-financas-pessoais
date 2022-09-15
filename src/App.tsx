import React, { useEffect, useState } from "react";
import * as S from "./AppStyled";
import InfoArea from "./Components/InfoArea/InfoArea";
import Table from "./Components/Table/Table";
import { itens } from "./Data/Itens";
import { filterListByMonth, getCurrentMoth } from "./Helpers/DateFilter";
import { Item } from "./Types/Item";

function App() {
  const [list, setList] = useState(itens);
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMoth());

  useEffect(() => {
    setFilterList( filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handleMonthChange = (newMonth:string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>
      <S.Body>
        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange}/>
        <Table list={filterList}/>
      </S.Body>
    </S.Container>
  );
}

export default App;
