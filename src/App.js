import React, { useState } from 'react';

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

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [{id: Math.random().toString(), ...expense}, ...prevExpenses];
    });
  }

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
