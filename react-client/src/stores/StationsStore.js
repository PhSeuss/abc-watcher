import { observable, action, computed } from 'mobx';

class StationStore {
  @observable stations = [];
  @observable trigger = false;
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
      .catch(err => console.log(err));
  };

  @action
  getDataAll = token => {
    const that = this;
    this.stations.forEach(function recursiveGet(station) {
      that
        .getDataOneStation(token, station)
        .then(() => {
          console.log('abc');
          setTimeout(() => recursiveGet(station), 2000);
        })
        .catch(() => setTimeout(() => recursiveGet(station), 2000));
    });
  };
  @action
  getDataOneStation = (token, station) =>
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
        return res;
      })
      .catch(err => err);

  @action
  addStation = (token, data) => {
    fetch('/v1/stations', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ station: data })
    })
      .then(() => {
        this.getStations(token);
      })
      .catch(err => console.log(err));
  };

  @computed
  get stationArray() {
    return this.stations.slice();
  }
}

export default new StationStore();
