GamesApp::Application.routes.draw do
  root :to => 'games#index'
  resources :users
  resources :careers
  resources :educations
  resources :portfolios
end
