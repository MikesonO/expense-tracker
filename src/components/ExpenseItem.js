import './ExpenseItem.scss';

function ExpenseItem(data) {

  return (
    <div className='expense-item'>
      <div>{data.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{data.title}</h2>
        <div className='expense-item__price'>£ {data.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;