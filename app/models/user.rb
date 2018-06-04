class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :follow_records
  has_many :subscriptions
  has_many :following_stations, through: :follow_records, source: :station
  has_many :subscribed_stations, through: :subscriptions, source: :station
end
