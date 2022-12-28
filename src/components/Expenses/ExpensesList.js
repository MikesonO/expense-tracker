import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {

  const expenses = props.items;

  //Check if expenses is empty
  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

  return <ul className='expenses-list'>
    {expenses.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount ={expense.amount} 
        date={expense.date}
      />
    ))}
  </ul>
  
}

export default ExpensesList;