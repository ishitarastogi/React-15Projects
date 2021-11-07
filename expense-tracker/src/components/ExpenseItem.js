import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate=new Date(2021,11,7 );
    const expenseTitle='car Insurance'
    const expenseAmount=295;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

//can't render<div>{expenseDate}</div> as it is a date object 
//so need to convert it in string {expenseDate.toISOString()}
