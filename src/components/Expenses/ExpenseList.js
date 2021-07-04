import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback ">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items
        // using .filter and .map to filter the expenses by year
        // .map returns all the array of the year using ExpenseItem component
        .map((expenseData) => {
          return (
            <ExpenseItem
              // added key to ensure that each component is unique
              key={expenseData.id}
              date1={expenseData.date}
              title={expenseData.title}
              amount={expenseData.amount}
            ></ExpenseItem>
          );
        })}
    </ul>
  );
}

export default ExpenseList;
