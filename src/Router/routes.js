import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Home from '../pages/home/index';
import Childish from '../pages/childish';
import FundamentalI from '../pages/fundamentalI';
import FundamentalII from '../pages/fundamentalII';
import HighSchool from '../pages/highschool.jsx';
import Gallery from '../components/galery';
import Depositions from '../pages/depositions';
import Contacts from '../pages/Contact';
import BilingualText from '../pages/bilingual';

const Routes = () => {
    return (
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/fotos' component={Gallery}/>
            <Route exact path='/infantil' component={Childish} />
            <Route exact path='/fundamentalI' component={FundamentalI} />
            <Route exact path='/fundamentalII' component={FundamentalII} />
            <Route exact path='/medio' component={HighSchool} />
            <Route exact path='/bilingue' component={BilingualText} />
            <Route exact path='/depoimentos' component={Depositions} />
            <Route exact path='/contato' component={Contacts} />
          </Switch>
        </Router>
    );
  }
  
  export default Routes