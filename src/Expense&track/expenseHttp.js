import axios from "axios";

const URL = "http://localhost:5000/api/expenses";

export async function addExpense(expenseData) {
    const token=localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response= await axios.post(URL, expenseData, config);
  
  const id=response.data;
  return id;
}

export async function removeExpense(id) {
    const token=localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.delete(URL + `/${id}`, config);
}

export async function updateExpense(id, expenseData) {
    const token=localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.put(URL + `/${id}`, expenseData, config);
}

export async function fetchExpense() {
    const token=localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const expenses = [];

  const response = await axios.get(URL, config);

  for (let index of response.data) {
    expenses.push(index);
  }
  return expenses;
}
