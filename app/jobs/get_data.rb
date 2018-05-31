class GetData

  def self.log 
    self.new.log 
  end
  
  def get_geo_info 
    HTTParty.get("http://envitayninh.com/api/Values/GetLatestData?user_id=1&station_id=8").parsed_response 
  end

  def log 
    geo_info = get_geo_info 
    Rails.logger.debug(geo_info) 
    # log response to database 
  end

end