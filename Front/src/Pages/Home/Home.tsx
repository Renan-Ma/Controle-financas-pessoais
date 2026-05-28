import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../Components/ConfirmModal/ConfirmModal";
import InfoArea from "../../Components/InfoArea/InfoArea";
import InputArea from "../../Components/InputArea/InputArea";
import Table from "../../Components/Table/Table";
import Toast from "../../Components/Toast/Toast";
import { categories } from "../../Data/Categories";
import { getCurrentMoth } from "../../Helpers/DateFilter";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { createExpense, deleteExpense, getExpenses } from "../../Services/FinanceService";
import { Item } from "../../Types/Item";
import * as S from "./styled";

type ToastState = { message: string; type: "success" | "error" } | null;

function Home() {
  useProtectedPage();

  const navigate = useNavigate();
  const [list, setList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMoth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  };

  const fetchExpenses = async (month: string) => {
    setLoading(true);
    try {
      const items = await getExpenses(month);
      setList(items);
    } catch (err) {
      showToast("Erro ao buscar despesas", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses(currentMonth);
  }, [currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in list) {
      if (categories[list[i].category] && categories[list[i].category].expense) {
        expenseCount += list[i].value;
      } else {
        incomeCount += list[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [list]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = async (item: Item) => {
    try {
      await createExpense(item);
      await fetchExpenses(currentMonth);
      showToast("Despesa cadastrada com sucesso!", "success");
    } catch (err: any) {
      showToast(err.response ? err.response.data : "Erro ao cadastrar despesa", "error");
    }
  };

  const handleDeleteItem = (id: string) => {
    setPendingDeleteId(id);
  };

  const confirmDelete = async () => {
    if (!pendingDeleteId) return;
    try {
      await deleteExpense(pendingDeleteId);
      await fetchExpenses(currentMonth);
      showToast("Despesa excluída com sucesso!", "success");
    } catch (err: any) {
      showToast(err.response ? err.response.data : "Erro ao excluir despesa", "error");
    } finally {
      setPendingDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setPendingDeleteId(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <S.Container>
      {pendingDeleteId && (
        <ConfirmModal
          message="Deseja excluir esta despesa?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <S.Header>
        <S.LogoutButton onClick={handleLogout}>Sair</S.LogoutButton>
      </S.Header>
      <S.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        {loading ? (
          <S.LoadingText>Carregando...</S.LoadingText>
        ) : (
          <Table list={list} onDelete={handleDeleteItem} />
        )}
      </S.Body>
    </S.Container>
  );
}

export default Home;
