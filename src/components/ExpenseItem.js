import './ExpenseItem.scss';

function ExpenseItem(data) {

  const month = data.date.toLocaleString('en-US',{month: 'long'});
  const day = data.date.toLocaleString('en-US',{day: '2-digit'});
  const year = data.date.getFullYear();

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div>{data.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{data.title}</h2>
        <div className='expense-item__price'>£ {data.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;