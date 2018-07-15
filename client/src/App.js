import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import NavBar from './components/nav/NavBar/NavBar';
import FoodDashboard from './components/food/FoodDashboard/FoodDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Landing } />
        </Switch>
       
        <Route 
          path = "/(.+)"
          render = {() => (
            <div>
              <NavBar />

              <Switch>
                <Route path="/food" components={ FoodDashboard } />
              </Switch>
            </div>
          )}
        />

      </div>
    );
  }
}

export default App;
