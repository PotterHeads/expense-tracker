import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date2={props.date1}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <span className="expense-item__price">{props.amount}</span>
      </div>
    </div>
  );
}

export default ExpenseItem;
