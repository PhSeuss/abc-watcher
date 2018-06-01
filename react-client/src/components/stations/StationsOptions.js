import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './StationsOptions.css';

@inject('AuthStore', 'StationsStore')
@observer
class StationsOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { stations } = this.props.StationsStore;
    return (
      <div className="stations-options">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Station</th>
              <th>Api</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {stations.map(station => (
              <tr key={station.id}>
                <td>{station.name}</td>
                <td>{station.api}</td>
                <td>
                  <button className="btn btn-danger">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StationsOptions;
