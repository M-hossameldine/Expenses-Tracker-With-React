import React, { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className='new-expense'>
      {!showForm && (
        <button onClick={showExpenseFormHandler}> Add New Expense </button>
      )}
      {showForm && (
        <ExpenseForm
          onCancel={showExpenseFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
