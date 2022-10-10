import { useNavigate, useNavigation } from "react-router-dom";

export default function Item({ expense }) {
    const navigation=useNavigate();

    function clickHandler (){

      navigation(`/manage/${expense.id}`)
    }
  return (
    
      <button onClick={clickHandler}>
        <div>
          <h3>{expense.description}</h3>
          <h3>{expense.date}</h3>
        </div>
        <div>
          <h3>{expense.cost}</h3>
        </div>
      </button>
    
  );
}
