import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './StationsOptions.css';

@inject('AuthStore', 'StationsStore')
@observer
class StationsOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addFormDisplay: false,
      name: '',
      api: ''
    };
  }
  handleSubmit() {
    console.log(this.state);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleAdd() {
    this.setState({
      addFormDisplay: true
    });
  }
  renderForm() {
    if (this.state.addFormDisplay)
      return (
        <tr>
          <td>
            <input
              type="text"
              name="name"
              placeholder="Station Name"
              onChange={this.handleChange.bind(this)}
            />
          </td>
          <td>
            <input
              type="text"
              name="api"
              placeholder="Api to get data"
              onChange={this.handleChange.bind(this)}
            />
          </td>
          <td>
            <button
              className="btn btn-success"
              onClick={this.handleSubmit.bind(this)}
            >
              Submit
            </button>
          </td>
        </tr>
      );
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
            {this.renderForm()}
            <button
              className="btn btn-info"
              onClick={this.handleAdd.bind(this)}
            >
              Add Station
            </button>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StationsOptions;
