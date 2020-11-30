import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Home from '../pages/home/index';

const Routes = () => {
    return (
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
    );
  }
  
  export default Routes