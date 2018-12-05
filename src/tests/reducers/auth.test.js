import expensesReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should login with uid', () => {
  const uid = 'sdlkjflaksdjflk';
  const action = {
    type: 'LOGIN',
    uid: uid,
  };
  const state = expensesReducer({}, action);
  expect(state).toEqual({ uid });
});

test('should logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = expensesReducer({}, action);
  expect(state).toEqual({});
});
