class UserMailer < ApplicationMailer
  default from: 'phseusss@gmail.com'
 
  def stations_notify_email down_stations
    @down_stations = down_stations
    @url  = 'http://abcsolution.com'
    mail(to: 'truonghoaithuong2000@gmail.com', subject: 'Your stations need attention!')
  end
end