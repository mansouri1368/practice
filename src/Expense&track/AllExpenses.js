import { useContext, useEffect } from "react";
import { ExpenseContext } from "./Expense-Context";
import { fetchExpense } from "./expenseHttp";

import Item from "./components/Item";

export default function AllExpenses() {
  const expCtx = useContext(ExpenseContext);
  const expenses = expCtx.expenses;

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpense();
      expCtx.fetchExpense(expenses);
    }
    getExpenses();
  }, []);

  return (
    <div>
      <h1>expenses list</h1>
      {expenses.map((m) => (
        <div key={m.id}>
          <Item expense={m} />
        </div>
      ))}
    </div>
  );
}
