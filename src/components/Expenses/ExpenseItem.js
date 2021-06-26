import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date2={props.date1}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <span className="expense-item__price">{props.amount}</span>
      </div>
    </Card>
  );
}

export default ExpenseItem;
