class V1::ResourcesController < V1::ApiController
  before_action :require_login, only: :index
  def index
    render json: {data: 'here your data'}
  end

  def email
    UserMailer.stations_notify_email(['trang bang','phuoc dong']).deliver
  end
end
