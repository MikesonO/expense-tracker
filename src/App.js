import React, { useState } from 'react';

import NewExepense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const TEST_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 11, 31),
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 4.99,
    date: new Date(2022, 11, 16),
  },
  {
    id: 'e3',
    title: 'Gym Membership',
    amount: 21.99,
    date: new Date(2022, 11, 1),
  },
  {
    id: 'e4',
    title: 'New Monitor',
    amount: 450,
    date: new Date(2022, 11, 16),
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(TEST_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h2 id="title">Expense Tracker</h2>
      <NewExepense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses}/>
    </div>
  );
}

export default App;
