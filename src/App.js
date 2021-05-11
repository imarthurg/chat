import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <Dashboard>
        <Switch>
          <Route path="/chat/:id" component={Chat}/>
        </Switch>
      </Dashboard>
    </Router>
  );
}

export default App;
