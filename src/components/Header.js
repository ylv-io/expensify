import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="is-active" exact={true}>home</NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active" exact={true}>create</NavLink>
      </li>

    </ul>
  </header>
);

export default Header;
