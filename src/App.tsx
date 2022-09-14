import React, { useEffect, useState } from "react";
import * as S from "./AppStyled";
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

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>
      <S.Body>

        <Table list={filterList}/>
      </S.Body>
    </S.Container>
  );
}

export default App;
