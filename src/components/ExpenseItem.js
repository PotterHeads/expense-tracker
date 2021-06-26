import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <span>25 June 2021</span>
      <div className="expense-item__description">
        <h2>Atas Food</h2>
        <span className="expense-item__price">$123</span>
      </div>
    </div>
  );
}

export default ExpenseItem;
