import React from 'react';
import { connect } from 'react-redux';

import numeral from 'numeral';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
  <div>
    <p>
      Viewing {props.expenses.length} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </p>
  </div>
);

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenses: expenses,
    expensesTotal: expensesTotal(expenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);