import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.scss';

const Expenses = (data) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const expense = data.expense;

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  }

  return (
    <div>
      <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />
       <ExpenseItem
      title={expense[0].title}
      amount={expense[0].amount}
      date={expense[0].date}
      />
     <ExpenseItem
      title={expense[1].title}
      amount={expense[1].amount}
      date={expense[1].date}
     />
     <ExpenseItem
      title={expense[2].title}
      amount={expense[2].amount}
      date={expense[2].date}
     />
     <ExpenseItem
      title={expense[3].title}
      amount={expense[3].amount}
      date={expense[3].date}
      />
   </Card>
  </div>
  );

}

export default Expenses;