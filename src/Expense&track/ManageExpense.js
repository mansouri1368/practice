import { useContext } from "react";
import { ExpenseContext } from "./Expense-Context";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "./expenseHttp";
import { useNavigate, useParams} from "react-router-dom";

export default function ManageExpense() {
  const navigation = useNavigate();
  const expCtx = useContext(ExpenseContext);
  
  const {id}= useParams();
  
  const selectedItem = expCtx.expenses.find((m)=> m.id === id);

console.log(selectedItem,id,expCtx.expenses)

  async function confirmHandler(inputs) {
    try {
      const id = await addExpense(inputs);
      expCtx.addExpense({ ...inputs, id: id });
      console.log(expCtx.expenses);
    } catch (error) {
      console.log(error);
    }
    navigation("/all");
  }
  return <ExpenseForm onSubmit={confirmHandler} defaultValue={selectedItem}/>;
}
