import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import DashBoard from './components/dashboard/DashBoard';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import StationsOptions from './components/stations/StationsOptions';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

@inject('AuthStore')
@observer
class App extends Component {
  render() {
    const { isAuthenticated } = this.props.AuthStore;
    return (
      <Router>
        <Route
          render={() => (isAuthenticated ? <PrivateRoute /> : <Login />)}
        />
      </Router>
    );
  }
}

const PrivateRoute = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/stations/options" component={StationsOptions} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
