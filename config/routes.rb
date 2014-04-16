GamesApp::Application.routes.draw do
  root :to => 'games#home'
  get '/games/:last_name' => 'games#index'
  get '/contacts/:last_name' => 'contacts#index'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
  
  resources :users
  resources :careers
  resources :educations
  resources :portfolios
  resources :contacts
end
