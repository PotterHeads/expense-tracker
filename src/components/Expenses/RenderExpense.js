import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./RenderExpense.css";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";

function RenderExpense(props) {
  const [filterYear, setFilterYear] = useState("2020"); // set default year to 2020

  const onExpenseFilterHandler = (filterValue) => {
    setFilterYear(filterValue);
  };

  // expenseData refers to each data in the array
  const filteredExpense = props.items.filter((expenseData) => {
    return (
      expenseData.date.toLocaleString("en-US", { year: "numeric" }) ===
      filterYear
    );
  });

  // toggle between no expenses found and expenses found using array length
  let displayParagraph = <p>No expenses found</p>;
  if (filteredExpense.length > 0) {
    displayParagraph = filteredExpense
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
      });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        currentFilter={filterYear}
        onExpenseFilter={onExpenseFilterHandler}
      ></ExpenseFilter>
      {displayParagraph}
    </Card>
  );
}

export default RenderExpense;
