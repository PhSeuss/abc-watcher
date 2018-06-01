import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../components/header/Header';
import DashBoard from '../components/dashboard/DashBoard';
import StationsOptions from '../components/stations/StationsOptions';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

@inject('AuthStore', 'StationsStore')
@observer
class PrivateRoutes extends Component {
  componentDidMount() {
    this.props.StationsStore.getStations(this.props.AuthStore.token);
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/dashboard" component={DashBoard} />
              <Route
                exact
                path="/stations/options"
                component={StationsOptions}
              />
              <Redirect to="/dashboard" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default PrivateRoutes;
