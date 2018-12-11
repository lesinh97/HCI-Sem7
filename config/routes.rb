Rails.application.routes.draw do
  get '*path', to: 'pages#root'
  get 'pages/root'
  root "static_pages#home"
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
