Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :articules
=begin
  get "/articules" show
  post "/articules" create
  delete "/articules/:id" destroy
  get "/articules/:id" show
  get "/articules" new
  get "/articules/:id/edit/" edit
  path "/articules/:id" update
  put "/articules/:id" update
=end

  root 'articules#index'

  get '/main', to: 'articules#indexx'
  get '/show', to: 'articules#show'


  get 'user/:id' => 'user#show'

end
