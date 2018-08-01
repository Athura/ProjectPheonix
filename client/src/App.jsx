import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/landing/LandingPage';
import FoodDashboard from './components/FoodPage/FoodDashboard';

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
              <Switch>
                <Route path="/food" component={ FoodDashboard } />
              </Switch>
            </div>
          )}
        />

      </div>
    );
  }
}

export default App;