import Card from "../UI/Card";
import "./RenderExpense.css";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

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
  return (
    <Card className="expenses">
      <ExpenseFilter
        currentFilter={filterYear}
        onExpenseFilter={onExpenseFilterHandler}
      ></ExpenseFilter>
      <ExpenseList items={filteredExpense}></ExpenseList>
    </Card>
  );
}

export default RenderExpense;
