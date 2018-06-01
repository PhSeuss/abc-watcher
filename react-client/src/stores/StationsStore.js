import { observable, action, computed } from 'mobx';

class StationStore {
  @observable stations = [];
  @action
  getStations = token => {
    fetch('/v1/stations', {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        this.stations = res.stations;
      })
      .then(() => {
        this.getData(token);
      });
  };

  @action
  getData = token => {
    this.stations.forEach(station => {
      fetch(`/v1/station/${station.id}/data`, {
        method: 'GET',
        headers: {
          Authorization: `Basic ${token}`
        }
      })
        .then(res => res.json())
        .then(res => {
          station.data = res.data;
          this.stations = this.stations.slice();
        })
        .catch(err => console.log(err));
    });
  };

  // @computed
  // get get_stations() {
  //   return this.stations.slice();
  // }
}

export default new StationStore();
