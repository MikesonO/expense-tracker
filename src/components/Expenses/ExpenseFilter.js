import './ExpenseFilter.scss';

const ExpensesFilter = (props) => {

  const handleSelectedYear = (event) => {
    props.onChangeFilter(event.target.value);
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleSelectedYear}>
          <option value={currentYear+2}>{currentYear+2}</option>
          <option value={currentYear +1}>{currentYear +1}</option>
          <option value={currentYear}>{currentYear}</option>
          <option value={currentYear-1}>{currentYear-1}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;