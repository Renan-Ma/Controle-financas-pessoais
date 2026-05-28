import axios from "axios";
import moment from "moment";
import { getToken } from "../Helpers/Token";
import { Item } from "../Types/Item";

const BASE_URL = "http://localhost:3003/user";

export const getExpenses = async (month: string): Promise<Item[]> => {
  const res = await axios.get(
    `${BASE_URL}/getExpense?date=${month}-01`,
    getToken()
  );

  return res.data.map((row: any) => ({
    id: row.id,
    date: new Date(row.date),
    category: row.category,
    title: row.description,
    value: parseFloat(row.value),
  }));
};

export const deleteExpense = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/expense/${id}`, getToken());
};

export const createExpense = async (item: Item): Promise<void> => {
  await axios.post(
    `${BASE_URL}/registerexpense`,
    {
      date: moment(item.date).format("YYYY-MM-DD"),
      category: item.category,
      description: item.title,
      value: item.value,
    },
    getToken()
  );
};
