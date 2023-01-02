import React, { useState, useEffect } from 'react';

import NewExepense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const TEST_EXPENSES = [
  {
    id: 'e1',
    title: 'Holiday',
    amount: 1500,
    date: new Date(2023, 11, 31),
  },
  {
    id: 'e2',
    title: 'Gym Membership',
    amount: 21.99,
    date: new Date(2023, 0, 1),
  },
  {
    id: 'e3',
    title: 'Toilet Paper',
    amount: 4.99,
    date: new Date(2023, 0, 7),
  },
  {
    id: 'e4',
    title: 'New Monitor',
    amount: 500,
    date: new Date(2022, 11, 16),
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(TEST_EXPENSES)

  // Local Storage
  useEffect (()=>{
    const data = window.localStorage.getItem('SAVED_EXPENSES');
    if (data !== null) {

      const item = JSON.parse(data, function (key, value) {
        if (key === 'date') {
          return new Date(value);
        } else {
          return value;
        }
      });

      setExpenses(item)
    } 
  }, []);

  useEffect (()=>{
    window.localStorage.setItem('SAVED_EXPENSES', JSON.stringify(expenses))
  }, [expenses]);

  // Add New Expense to list
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [{id: Math.random().toString(), ...expense}, ...prevExpenses];
    });
  }

  // Delete Expense from list
  const deleteExpenseHandler = expense => {
    setExpenses(expenses.filter(item => item.id !== expense));
  }

  return (
    <div>
      <h2 id="title">Expense Tracker</h2>
      <NewExepense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} onDeleteExpense={deleteExpenseHandler}/>
    </div>
  );
}

export default App;
