import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      ammount: 294.67,
      date: new Date(2022, 12, 15),
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      ammount: 4.99,
      date: new Date(2022, 12, 15),
    },
    {
      id: 'e3',
      title: 'Gym Membership',
      ammount: 21.99,
      date: new Date(2022, 12, 1),
    },
    {
      id: 'e4',
      title: 'New Monitor',
      ammount: 450,
      date: new Date(2022, 12, 15),
    },
  ];

  return (
    <div>
      <h2 id="title">Expense Tracker</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].ammount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].ammount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].ammount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].ammount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
