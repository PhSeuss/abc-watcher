Rails.application.routes.draw do
  # devise_for :users
  namespace :v1, default: { format: :json } do
    resources :users, only: :create
    resources :stations
    
    get '/station/:id/data' => 'stations#data'
    post '/session' => 'sessions#create'
    delete '/session' => 'sessions#destroy'
    
    get '/email' => 'resources#email'
  end
end
