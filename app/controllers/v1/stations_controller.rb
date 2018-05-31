class V1::StationsController < V1::ApiController
  before_action :require_login
  def index 
    @stations = Station.all
    render json: { stations: @stations }, status: :ok
  end

  def data
    station = Station.find(params[:id])
    data = HTTParty.get(station.api)
    render json: {data: data}, status: :ok
  end

  def create
      @station = Station.new(station_params)
      if @station.save
          render :create
      else
          head(:unprocessable_entity)
      end
  end

  private
  
  def station_params
      params.require(:station).permit(:email, :password, :password_confirmation)
  end

end