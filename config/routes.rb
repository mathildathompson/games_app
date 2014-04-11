GamesApp::Application.routes.draw do
  root :to => 'games#index'
  get '/home' => 'games#home'
  resources :users
  resources :careers
  resources :educations
  resources :portfolios
end
