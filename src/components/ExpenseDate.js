

function ExpenseDate(data) {

  const month = data.date.toLocaleString('en-US',{month: 'long'});
  const day = data.date.toLocaleString('en-US',{day: '2-digit'});
  const year = data.date.getFullYear();

  return (
    <div>
    <div>{month}</div>
    <div>{day}</div>
    <div>{year}</div>
  </div>
  )

}




export default ExpenseDate;