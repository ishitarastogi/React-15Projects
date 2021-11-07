import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

//can't render<div>{expenseDate}</div> as it is a date object 
//so need to convert it in string {expenseDate.toISOString()}
