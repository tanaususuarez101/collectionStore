Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'main#index'

  get '/main', to: 'main#index'
  get '/index', to: 'main#index'
  get '/sign-up', to: 'sign_up#sign-up'

end
