Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  Rails.application.routes.draw do
	  root to: 'static_pages#root';


	  namespace :api, defaults: {format: :json} do
  		resources :users, only: [:create]
  		resource :session, only: [:create, :destroy]
	  end
  end
end
