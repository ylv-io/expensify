import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  startAddExpense,
  addExpense,
  startEditExpense,
  editExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = '234098jdzfioj234';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesList = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesList[id] = { description, note, amount, createdAt };
  });
  database.ref(`users/${uid}/expenses`)
    .set(expensesList)
    .then(done);
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should remove expense from database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      });
      return database
        .ref(`users/${uid}/expenses/${id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(null);
      done();
    });
});

test('should setup edit expense action object', () => {
  const action = editExpense('0', { sup: 'sup' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '0',
    updates: { sup: 'sup' },
  });
});

test('should edit expense in database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = { description: 'Coffee' }
  store.dispatch(startEditExpense(id, updates ))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });
      return database
        .ref(`users/${uid}/expenses/${id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect({
        ...snapshot.val(),
        id
      }).toEqual({
        ...expenses[0],
        ...updates,
      });
      done();
    });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenses[0],
      id: expect.any(String),
    }
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expense = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 23432,
  };
  store.dispatch(startAddExpense(expense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expense,
      }
    });
    return database
      .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
      .once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expense);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultData,
      }
    });
    return database
      .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
      .once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultData);
    done();
  });
});

test('should setup set expenses action object with data', () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
