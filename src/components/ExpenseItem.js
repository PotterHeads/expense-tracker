import "./ExpenseItem.css";

function ExpenseItem(props) {
  // expanding out date to show as a calendar
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <span className="expense-item__price">{props.amount}</span>
      </div>
    </div>
  );
}

export default ExpenseItem;
