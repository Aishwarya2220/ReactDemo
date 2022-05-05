import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  const [title, getTitle] = useState("");
  const [amount, getAmount] = useState("");
  const [date, getDate] = useState("");

  const titleChangeHandler = (event) => {
    getTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    getAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    getDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const ExpenseData = {
      Title: title,
      Amount: amount,
      Date: new Date(date)
    };
    console.log(ExpenseData);
    getTitle("");
    getAmount("");
    getDate("");
  };

  return (
    <div className="Expense-form" onSubmit={handleSubmit}>
      <form>
        <input
          className="Expense-form-text"
          type="text"
          placeholder="Title"
          value={title}
          onChange={titleChangeHandler}
        />
        <input
          className="Expense-form-amount"
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={amountChangeHandler}
        />
        <input
          className="Expense-date"
          type="date"
          value={date}
          onChange={dateChangeHandler}
        />
        <button className="Btn">Add Item</button>
      </form>
    </div>
  );
}
export default ExpenseForm;
