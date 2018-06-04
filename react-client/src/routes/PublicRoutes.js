import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Login from '../components/login/Login';

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
