import React, {useState} from "react";
import * as S from "./AppStyled";
import { items } from "./Data/Items";
import { getCurrentMoth } from "./Helpers/DateFilter";


function App() {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMoth())
  
  return (
    <S.Container>
      <S.Header >

        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>
      <S.Body>

      </S.Body>
    </S.Container>
  );
}

export default App;
