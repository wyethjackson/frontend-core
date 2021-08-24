import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
