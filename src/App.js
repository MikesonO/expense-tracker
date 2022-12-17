import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      ammount: 294.67,
      date: new Date(2023, 11, 31),
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      ammount: 4.99,
      date: new Date(2022, 11, 16),
    },
    {
      id: 'e3',
      title: 'Gym Membership',
      ammount: 21.99,
      date: new Date(2022, 11, 1),
    },
    {
      id: 'e4',
      title: 'New Monitor',
      ammount: 450,
      date: new Date(2022, 11, 16),
    },
  ];

  return (
    <div>
      <h2 id="title">Expense Tracker</h2>
      <Expenses expense={expenses}/>
    </div>
  );
}

export default App;
