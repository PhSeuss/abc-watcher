class GetData

  def self.exec
    self.new.get_all_data 
  end
  
  def get_all_data
    down_stations = [];
    stations = Station.all
    stations.each do |station|
      res = HTTParty.get(station.api)
      lastOnline = Time.now - res['HappenedTime'].to_time
      if lastOnline > 3600
        puts "#{res['StationName']} is down"
        down_stations.push(res['StationName'])
      end
    end
    down_stations && UserMailer.stations_notify_email(down_stations).deliver_now
  end

end