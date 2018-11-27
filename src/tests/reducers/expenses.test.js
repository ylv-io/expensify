import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '11',
    description: 'Gumsdfds',
    note: '',
    amount: 195324,
    createdAt: 0,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toContain(expense);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'super note'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('super note');
});

test('should not edit an expense if the expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'super note'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});