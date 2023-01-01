import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss';

const ExpenseItem = (data) => {

  const deleteExpense = () => {
    data.onDeleteExpense(data.id);
  }

  return (
    <li>
      <Card className='expense-item'>
       <ExpenseDate date={data.date}/>
       <div className='expense-item__description'>
          <h2>{data.title}</h2>
          <div className='expense-item__price'>£ {data.amount}</div>
        </div>
        <p onClick={deleteExpense}>delete</p>
      </Card>
    </li>
  );
}

export default ExpenseItem;