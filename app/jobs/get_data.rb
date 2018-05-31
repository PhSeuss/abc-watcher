class GetData

  def self.exec
    self.new.get_all_data 
  end
  
  def get_all_data
    stations = Station.all
    stations.each do |station|
      res = HTTParty.get(station.api)
      lastOnline = Time.now - res['HappenedTime'].to_time 
      puts res, res['StationName'], lastOnline
    end
  end

end