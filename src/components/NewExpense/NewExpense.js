import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const editing = () => {
    setIsEditing(true);
  };
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      //new id to be added to object
      id: Math.random().toString(),
    };
    // pass to App.js
    props.addNewExpenseData(expenseData);
  };
  const cancelBtn = () => {
    setIsEditing(false);
  };
  return (
    // if isEditing is true, ExpenseForm will be rendered
    <div className="new-expense">
      {!isEditing && <button onClick={editing}>Add new Expense</button>}
      {isEditing && (
        <ExpenseForm
          btnCancelFunc={cancelBtn}
          onSaveExpenseData={saveExpenseData}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
