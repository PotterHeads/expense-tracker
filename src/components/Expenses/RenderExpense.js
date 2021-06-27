import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./RenderExpense.css";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";

function RenderExpense(props) {
  // set default year to 2020
  const [filterYear, setFilterYear] = useState("2020");
  const onExpenseFilterHandler = (filterValue) => {
    setFilterYear(filterValue);
  };
  return (
    // items refers to expenses in App.js, items is in an object when it is passed from App.js
    <Card className="expenses">
      <div>
        <ExpenseFilter
          currentFilter={filterYear}
          onExpenseFilter={onExpenseFilterHandler}
        ></ExpenseFilter>
      </div>
      <ExpenseItem
        date1={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date1={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date1={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default RenderExpense;
