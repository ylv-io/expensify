import expensesTotalReducer from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = expensesTotalReducer([]);
  expect(total).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const total = expensesTotalReducer([expenses[0]]);
  expect(total).toEqual(195);
});

test('should correctly add up a multiple expenses', () => {
  const total = expensesTotalReducer(expenses);
  expect(total).toEqual(114195);
});
