import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //creating multiple different states for 3 inputs
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 4 functions to detect the changes of the input
  const detectTitle = (e) => {
    setEnteredTitle(e.target.value);
  };
  const detectAmount = (e) => {
    setEnteredAmount(e.target.value);
  };
  const detectDate = (e) => {
    setEnteredDate(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault(); //prevent page from refreshing
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // saveExpenseData function is from NewExpense.js to pass the data to NewExpense
    props.onSaveExpenseData(expenseData);

    // set the form to go back to the btn page once it is submitted
    props.btnCancelFunc();

    //reset input to empty string after submitting form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    // detect submission for forms
    <form onSubmit={onSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // set default value of title
            value={enteredTitle}
            onChange={detectTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={detectAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={detectDate}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.btnCancelFunc}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
