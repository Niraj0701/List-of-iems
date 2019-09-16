import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import {database} from './firebase';
import ListPage from './containers/list/list.container';
import Details from './containers/details/details.container';
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
        <h1>Header</h1>
        <div className="App">
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/list' component={ListPage} />
            <Route path='/item-details/:id' strict component={Details} />
          </Switch>
      </div>
        <h1>footer</h1>
      </Router>
      
    );
  }
}

export default App;
