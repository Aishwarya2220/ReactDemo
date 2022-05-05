import "./ExpenseItem.css";
function ExpenseItem(props) {
  var d = new Date();

  var date = d.getUTCDate();
  var month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
  var year = d.getUTCFullYear();
  return (
    <div className="container">
      <div className="expense-item">
        <div>{date}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item-description">{props.Title}</div>
      <div className="expense-item-price">Rs {props.Price}</div>
    </div>
  );
}
export default ExpenseItem;
