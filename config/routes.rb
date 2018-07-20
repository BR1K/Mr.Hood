Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  root to: 'static_pages#root';


  namespace :api, defaults: {format: :json} do
		resources :users, only: [:create]
		resource :session, only: [:create, :destroy, :show]
    resources :stocks, only: [:index, :show]
    resources :trades, only: [:index, :create, :show]
    resources :portfolios, only: [:show]
    resources :portfolio_snapshots, only: [:create, :index]
  end
end
