Rails.application.routes.draw do
  put "stickies/:id/change_color", to: "stickies#change_color"

  # Defines the root path route ("/")
  root "home#index"
end
