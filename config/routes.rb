Rails.application.routes.draw do
  resources :posts
  devise_for :users, controllers: {
  	sessions: 'authentication/sessions',
  	registrations: 'authentication/registrations'
  }

  authenticated :user do
  	root 'home#dashboard', as: :authenticated_root
  end	
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
