import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
  const action = login('123abcsdfadsfsdf');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '123abcsdfadsfsdf',
  });
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
