import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { dispatch } from 'rxjs/internal/observable/range';


export const Header = (props) => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active" exact={true}>create</NavLink>
      </li>
      <li>
        <button onClick={props.startLogout}>Logout</button>
      </li>

    </ul>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
