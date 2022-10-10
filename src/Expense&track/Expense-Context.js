import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  addExpense: ({ cost, date, description }) => {},
  removeExpense: (id) => {},
  updateExpense: (id, { cost, date, description }) => {},
  fetchExpense: () => {},
  expenses: [""],
});

function reducer(state, action) {
  switch (action.type) {
    case "add":
      const expenses= [...state, action.payload]
      return expenses;

    case "remove":
      return state.filter((m)=>m.id !== action.payload);
    case "update":
      const updatableIndex= state.findIndex((m)=>m.id === action.payload.id);
       const updatable= state[updatableIndex];
       const updated={...updatable,...action.payload.expenses};
       const updatedExpenses= [...state];
       updatedExpenses[updatableIndex]=updated;
       return updatedExpenses;
    case "fetch":
      return action.payload;

    default:
      return state;
  }
}

export default function ExpenseContextProvider({children}) {
  const [expenseState, dispatch] = useReducer(reducer, []);

  function addExpense(expenseData) {
    dispatch({type:"add",  payload: expenseData });
  }
  function removeExpense(id) {
    dispatch({type:"remove",  payload: id} );
  }
  function updateExpense(id, expenseData) {
    dispatch({type:"update",  payload: { id: id, expenses: expenseData }} );
  }
  function fetchExpense(expenses) {
    dispatch({type:"fetch",  payload: expenses} );
  }
  const value = {
    addExpense: addExpense,
    removeExpense: removeExpense,
    updateExpense: updateExpense,
    fetchExpense: fetchExpense,
    expenses: expenseState,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
