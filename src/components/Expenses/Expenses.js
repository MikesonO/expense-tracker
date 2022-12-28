import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
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

  
  let expensesContent = <p>No Expenses found.</p>

  //Check if expenses is empty
  if (filteredExpenses.length > 0){
    expensesContent =  filteredExpenses.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount ={expense.amount} 
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className='expenses'>
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}  
      />
      {expensesContent}
   </Card>
  </div>
  );

}

export default Expenses;