import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Home from '../pages/home/index';
import Childish from '../pages/childish';
import Fundamental from '../pages/fundamental';
import HighSchool from '../pages/highschool.jsx';

const Routes = () => {
    return (
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/infantil' component={Childish} />
            <Route exact path='/fundamental' component={Fundamental} />
            <Route exact path='/medio' component={HighSchool} />
          </Switch>
        </Router>
    );
  }
  
  export default Routes