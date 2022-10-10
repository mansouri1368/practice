import { useState } from "react";
import { Input, MultilineInput } from "./components/InputForExpense";
import styles from './Expense.module.css';

export default function ExpenseForm({onSubmit,defaultValue}) {
  const [inputs, setInputs] = useState({
    cost: defaultValue ? defaultValue.cost : "",
    date: defaultValue ? defaultValue.date.slice(0,10) : "",
    description: defaultValue ? defaultValue.description : "",
  });
  const [credentials, setCredentials] = useState({
    cost: false,
    date: false,
    description: false,
  });

  const {
    cost: costIsInvalid,
    date: dateIsInvalid,
    description: descriptionIsInvalid,
  } = credentials;

  function onChangeHandler(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setInputs((cr) => ({ ...cr, [name]: value }));
    setCredentials((cr) => ({ ...cr, [name]: !value }));
    
  }
  
  function submitHandler(e) {
    e.preventDefault();
    const { cost, date, description } = inputs;
    const costIsvalid = !isNaN(+cost) ;
    const dateIsvalid = new Date(date) !== "Invalid Date" && date.length === 10;
    const descriptionIsvalid = description.trim().length > 7;
    
      
    
    if (!costIsvalid || !dateIsvalid || !descriptionIsvalid) {
      setCredentials({
        cost: !costIsvalid,
        date: !dateIsvalid ,
        description: !descriptionIsvalid,
      });
      
      return;
    } else {
        onSubmit(inputs)
       
    }
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        invalid={costIsInvalid}
        label="Expense"
        inputConfig={{
          name: "cost",
          value: inputs.cost,
          onChange: onChangeHandler,
          
        }}
      />
      <Input
        invalid={dateIsInvalid}
        label="Date"
        inputConfig={{
          name: "date",
          value: inputs.date,
          onChange: onChangeHandler,
        }}
      />

      <MultilineInput
        invalid={descriptionIsInvalid}
        label="Description"
        multilineInputConfig={{
          name: "description",
          value: inputs.description,
          cols: 9,
          onChange: onChangeHandler,
        }}
      />
      <div className={styles.buttonContainer}>
      <button type="submit">Add Expense</button>
      </div>
      
    </form>
  );
}
