import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.scss';

const Expenses = (data) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const expenses = data.expense;

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  }

  return (
    <div>
      <Card className='expenses'>
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}  
      />

      {expenses.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount ={expense.amount} 
          date={expense.date}
        />
      ))}
   </Card>
  </div>
  );

}

export default Expenses;