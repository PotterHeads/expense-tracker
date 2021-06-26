function ExpenseDate(props) {
  // expanding out date to show as a calendar
  const month = props.date2.toLocaleString("en-US", { month: "long" });
  const day = props.date2.toLocaleString("en-US", { day: "numeric" });
  const year = props.date2.toLocaleString("en-US", { year: "numeric" });
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
