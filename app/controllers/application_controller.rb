class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  helper_method :current_user, :logged_in
end