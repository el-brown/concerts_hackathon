Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users
    # resources :venues do
    #   resources :tickets
    # end
    resources :venues 
    resources :tickets
    
    get '/artistVenue', to: 'artist_venue#artistAndVenue'

  end
end
