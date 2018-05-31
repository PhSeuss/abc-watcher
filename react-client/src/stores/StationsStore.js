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
        this.stations.forEach(station => {
          this.getData(token, station.id);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  getData = (token, station_id) => {
    fetch(`/v1/station/${station_id}/data`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        this.stations[station_id].data = res.data;
        const tem = this.stations.slice();
        this.stations = tem;
      })
      .catch(err => console.log(err));
  };

  @computed
  get count() {
    return this.stations.length;
  }
}

export default new StationStore();
