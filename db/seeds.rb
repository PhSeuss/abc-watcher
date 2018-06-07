# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
thuong = User.create(email: 'truonghoaithuong@gmail.com', password: '123456', password_confirmation: '123456')
vinh = User.create(email: 'huuvinhtran4@gmail.com', password: '123456', password_confirmation: '123456')
riseun = Station.create(name: 'Rise Sun', api: 'http://envitayninh.com/api/Values/GetLatestData?user_id=1&station_id=8')
ttc = Station.create(name: 'Thành Thành Công', api: 'http://envitayninh.com/api/Values/GetLatestData?user_id=1&station_id=5')
tb = Station.create(name: 'Trảng Bàng', api: 'http://envitayninh.com/api/Values/GetLatestData?user_id=1&station_id=1')

thuong.subscribed_stations << tb
thuong.subscribed_stations << ttc