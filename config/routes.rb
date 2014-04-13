GamesApp::Application.routes.draw do
  root :to => 'games#home'
  get '/home' => 'games#home'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
  
  resources :users
  resources :careers
  resources :educations
  resources :portfolios
end
