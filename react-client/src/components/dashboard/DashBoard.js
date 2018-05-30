import React, { Component } from 'react';
import './DashBoard.css';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Panels with Contextual Classes</h2>
        <div className="row panel-group">
          <div className="col-md-3">
            <div className="panel panel-primary">
              <div className="panel-heading">
                Panel with panel-primary class
              </div>
              <div className="panel-body">Panel Content</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="panel panel-success">
              <div className="panel-heading">
                Panel with panel-primary class
              </div>
              <div className="panel-body">Panel Content</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="panel panel-danger">
              <div className="panel-heading">
                Panel with panel-primary class
              </div>
              <div className="panel-body">Panel Content</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
