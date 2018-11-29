import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>
        {description}
      </Link>
    </h3>
    <p>{numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMM Do YYYY')}</p>
  </div>
);

export default ExpenseListItem;