import React, { Component } from 'react';
import './DashBoard.css';
import { observer, inject } from 'mobx-react';

@inject('StationsStore', 'AuthStore')
@observer
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.loaded = false;
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.loaded && this.props.StationsStore.stations) {
      this.loaded = true;
      this.props.StationsStore.getDataAll(this.props.AuthStore.token);
    }
  }
  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  render() {
    const { stations } = this.props.StationsStore;
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
