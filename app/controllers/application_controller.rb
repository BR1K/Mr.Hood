class ApplicationController < ActionController::Base

  helper_method :current_user
  helper_method :logged_in?

	def current_user
		@current_user ||= User.find_by(session_token: session[:session_token])
	end

	# def ensure_logged_in
	# 	redirect_to unless logged_in?
	# end

	def login(user)
		@current_user = user
		session[:session_token] = @current_user.session_token
	end

	def logout
		@current_user.reset_session_token
		session[:session_token] = nil
	end

	def logged_in?
		!!current_user
	end

end
