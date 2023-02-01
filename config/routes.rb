Rails.application.routes.draw do
  get 'groups/index'
  get 'groups/show'
  get 'groups/create'
  get 'groups/update'
  get 'groups/destroy'
  get 'books/index'
  get 'books/show'
  get 'books/create'
  get 'users/index'
  get 'users/show'
  get 'users/create'
  get "/me", to: "users#show"
  get "/sessions", to: "sessions#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
