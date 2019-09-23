import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
// import {database} from './firebase';
import ListPage from './containers/list/list.container';
import Details from './containers/details/details.container';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <Header/>
                <div className="App">
                    <Switch>
                        <Route exact path='/list' component={ListPage}/>
                        <Route path='/item-details/:id' strict component={Details}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>

        );
    }
}

export default App;
