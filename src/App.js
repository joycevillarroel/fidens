import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">


          <Route exact path='/' component={Home}/>
 
       
      </div>
    );
  }
}

export default App;