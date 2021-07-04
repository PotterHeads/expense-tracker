import { useState } from "react";
import RenderExpense from "./components/Expenses/RenderExpense";
import NewExpense from "./components/NewExpense/NewExpense";

//fake data
const fake_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  // have to make it dynamic such that when a new data is received, it will be update expenses
  // need to use useState to ensure that expense array is updated
  // newExpense stores the updated array and it should be passed to RenderExpense where it will be shown to the user
  const [newExpense, setNewExpense] = useState(fake_expenses);

  //expenseData from NewExpense.js
  const saveExpenseDataHandler = (expenseData) => {
    // current data will be added to prev data
    setNewExpense((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense addNewExpenseData={saveExpenseDataHandler}></NewExpense>
      <RenderExpense items={newExpense}></RenderExpense>
    </div>
  );
}

export default App;
