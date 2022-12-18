import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.scss';

function Expenses (data) {

  const expense = data.expense;

  return (
    <Card className='expenses'>
      <ExpenseItem
      title={expense[0].title}
      amount={expense[0].ammount}
      date={expense[0].date}
    />
    <ExpenseItem
      title={expense[1].title}
      amount={expense[1].ammount}
      date={expense[1].date}
    />
    <ExpenseItem
      title={expense[2].title}
      amount={expense[2].ammount}
      date={expense[2].date}
    />
    <ExpenseItem
      title={expense[3].title}
      amount={expense[3].ammount}
      date={expense[3].date}
    />
  </Card>
  );

}

export default Expenses;