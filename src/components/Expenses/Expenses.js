import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpenseTotal from './ExpenseTotal';
import './Expenses.scss';

const Expenses = (data) => {

  const currentYear = new Date().getFullYear();
  const [filteredYear, setFilteredYear] = useState(`${currentYear}`);

  const expenses = data.expense;

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}  
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} onDeleteExpense={data.onDeleteExpense}/>
      <ExpenseTotal total={filteredExpenses}/>
      
   </Card>
  </div>
  );

}

export default Expenses;