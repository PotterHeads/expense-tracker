import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./RenderExpense.css";

function RenderExpense(props) {
  return (
    // items refers to expenses in App.js, items is in an object when it is passed from App.js
    <Card className="expenses">
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
