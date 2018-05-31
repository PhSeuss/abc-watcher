class V1::ResourcesController < V1::ApiController
  before_action :require_login, only: :index
  def index
    render json: {data: 'here your data'}
  end

  def email
    UserMailer.stations_notify_email.deliver
  end
end
