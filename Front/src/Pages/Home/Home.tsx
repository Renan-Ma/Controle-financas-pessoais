import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { isMetaProperty } from "typescript";
import InfoArea from "../../Components/InfoArea/InfoArea";
import InputArea from "../../Components/InputArea/InputArea";
import Table from "../../Components/Table/Table";
import { categories } from "../../Data/Categories";
import { itens } from "../../Data/Itens";
import { filterListByMonth, getCurrentMoth } from "../../Helpers/DateFilter";
import { TOKEN } from "../../Helpers/Token";
import { Item } from "../../Types/Item";
import * as S from "./styled";


function Home() {
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
    console.log(localStorage.getItem("token"))

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filterList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = async (item: Item) => {
    const body = {
      date: moment(item.date).format("yyyy-MM-DD"),
      category: item.category,
      description: item.title,
      value: item.value
    }
    await axios
      .post("http://localhost:3003/user/registerexpense", {
        date: moment(item.date).format("yyyy-MM-DD"),
        category: item.category,
        description: item.title,
        value: item.value
      }, TOKEN)
      .then((res) => {})
      .catch((err) => {
        alert(err.response.data.message);
      })
  
  }

  return (
    <S.Container>
      <S.Header>
        {/* <S.HeaderText>Sistema Financeiro</S.HeaderText> */}
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

export default Home;
