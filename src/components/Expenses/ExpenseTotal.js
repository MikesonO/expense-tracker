import './ExpenseTotal.scss';

const ExpenseTotal = data => {

  const calculateTotal = () => {
    const total = data.total.reduce((total, expense) => total + expense.amount, 0);
    return Number.isInteger(total) ? total : total.toFixed(2);
  }

  if (data.total.length === 0) {
    return
  }

  return (
    <h2 className="expense-total">Total: £ {calculateTotal()}</h2>
  )
}

export default ExpenseTotal;