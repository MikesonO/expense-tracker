import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss';

function ExpenseItem(data) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={data.date}/>
      <div className='expense-item__description'>
        <h2>{data.title}</h2>
        <div className='expense-item__price'>£ {data.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;