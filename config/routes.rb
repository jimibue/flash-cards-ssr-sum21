Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'categories#app'
  # resources :categories

  get '/categories', to:'categories#index'
  get '/categories/:id', to:'categories#show'

  get '/categories/:category_id/cards', to: 'cards#index'
  get '/categories/:category_id/cards/:id', to: 'cards#show'

  get  '/cards', to:'cards#all'
end
