class UserMailer < ApplicationMailer
  default from: 'phseusss@gmail.com'
 
  def stations_notify_email
    @url  = 'http://abcsolution.com'
    mail(to: 'truonghoaithuong2000@gmail.com', subject: 'Your stations need attention!')
  end
end