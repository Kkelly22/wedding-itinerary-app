Rails.application.routes.draw do
  get 'welcome/index'
  resources :users do
  	resources :plans
  end

   get 'user', to: 'users#show', as: 'user_show'
   post 'signup', to: 'users#create', as: 'user_signup'
   get 'login', to: 'users#login', as: 'user_login'
   get 'logout', to: 'users#logout', as: 'user_logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
