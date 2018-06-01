import React, { Component } from 'react';
import './App.css';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

@inject('AuthStore', 'StationsStore')
@observer
class App extends Component {
  render() {
    const { isAuthenticated } = this.props.AuthStore;
    return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
  }
}

export default App;
