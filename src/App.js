import "./styles.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";
export default function App() {
  const expenses = [
    { Title: "Car Insurance", Price: 1000 },
    { Title: "Salon", Price: 1000 }
  ];
  return (
    <>
      <ExpenseForm />
      <ExpenseItem Title={expenses[0].Title} Price={expenses[0].Price} />
      <ExpenseItem Title={expenses[1].Title} Price={expenses[1].Price} />
    </>
  );
}
