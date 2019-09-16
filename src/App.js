import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import {database} from './firebase';
import ListPage from './containers/list/list.container';
import HomePage from './components/home';

class App extends Component {
  constructor() {
    super();

   /*  database.ref().on('value', (data)=> {
      console.log('data: ', data.val());
    }); */
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/list' component={ListPage} />
          </Switch>
      </div>
      </Router>
      
    );
  }
}

export default App;
