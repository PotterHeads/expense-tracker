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

  return (
    <Card className="expenses">
      <ExpenseFilter
        currentFilter={filterYear}
        onExpenseFilter={onExpenseFilterHandler}
      ></ExpenseFilter>
      {props.items.map((expenseData) => {
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
    </Card>
  );
}

export default RenderExpense;
