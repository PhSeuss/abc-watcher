import React, { Component } from 'react';
import './DashBoard.css';
import { observer, inject } from 'mobx-react';

@inject('StationsStore', 'AuthStore')
@observer
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps, prevState) {}
  componentDidMount() {
    const { getStations, getAllData } = this.props.StationsStore;
    const { token } = this.props.AuthStore;
    this.props.StationsStore.enablePolling();
    getStations(token).then(res => getAllData(token));
  }
  componentWillUnmount() {
    this.props.StationsStore.disablePolling();
  }

  render() {
    const stations = this.props.StationsStore.stations;
    return (
      <div>
        <div className="row panel-group">
          {!stations ? (
            <h2>Loading...</h2>
          ) : (
            stations.map(station => (
              <div key={station.id} className="col-md-3">
                <div className="panel panel-success">
                  <div className="panel-heading">{station.name}</div>
                  <div className="panel-body">
                    {station.data ? (
                      station.data.StrHappenedTime
                    ) : (
                      <span>Loading...</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default DashBoard;
