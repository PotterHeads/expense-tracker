import "./ExpenseDate.css";

function ExpenseDate(props) {
  // expanding out date to show as a calendar
  const month = props.date2.toLocaleString("en-US", { month: "long" });
  const day = props.date2.toLocaleString("en-US", { day: "numeric" });
  const year = props.date2.toLocaleString("en-US", { year: "numeric" });
  return (
    // separating date into date,month,year
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day"> {day}</div>
    </div>
  );
}

export default ExpenseDate;
