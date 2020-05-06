import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/Profile'

function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <main className="app__content">
        <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </main>
    </div>
  );
}

export default Layout;
