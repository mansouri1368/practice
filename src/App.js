
import './App.css';
import Login from './Signin&Signup/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Signin&Signup/Welcome';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Signin&Signup/Auth-Context';
import ExpenseForm from './Expense&track/ExpenseForm';
import ManageExpense from './Expense&track/ManageExpense';
import AllExpenses from './Expense&track/AllExpenses';
import CSS from './CSS&SASS practice/CSS';

function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.token);

  useEffect(()=>{
  const storedToken=  localStorage.getItem('token');
     if(storedToken) authCtx.authenticate(storedToken)
     
  },[authCtx])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CSS />} />
      <Route path='/' element={<Login />} />
      <Route path='manage' element={<ManageExpense />} >
      <Route path=':id' element={<ManageExpense />} />
        </Route>
      <Route path='all' element={<AllExpenses />} />
      <Route path='welcome' element={<Welcome />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
