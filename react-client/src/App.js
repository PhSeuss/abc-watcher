import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import DashBoard from './components/dashboard/DashBoard';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import DataTable from './components/datatable/DataTable';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/datatable" component={DataTable} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={DashBoard} />
      </div>
    </div>
  );
};

export default App;
