import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './Header.css';
import { Link } from 'react-router-dom';

@inject('AuthStore')
@observer
class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(e) {
    this.props.AuthStore.deauthenticateToken();
  }
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand company-name">
                ABC SOLUTIONS
              </Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/stations/options">
                  <span className="glyphicon glyphicon-cog" /> Setting
                </Link>
              </li>
              <li>
                <a href="">
                  <span className="glyphicon glyphicon-user" /> Profile
                </a>
              </li>
              <li>
                <a href="" onClick={this.handleLogout}>
                  <span className="glyphicon glyphicon-log-in" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
