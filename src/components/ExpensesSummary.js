import React from 'react';
import { connect } from 'react-redux';

import numeral from 'numeral';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesTotal, expensesCount}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedValue = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <p>
        Viewing {expensesCount} {expenseWord} totalling {formattedValue}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: expenses.length,
    expensesTotal: expensesTotal(expenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);