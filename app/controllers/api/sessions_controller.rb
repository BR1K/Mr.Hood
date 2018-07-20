class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
			params[:user][:email],
			params[:user][:password]
		)
		if @user
			login(@user)
			render 'api/users/show'
		else
			render json: ['Invalid email or password.'], status: 401
		end
	end

	def destroy
		if current_user
			logout
			render json: {}
		else
			render json: ['You are not signed in.'], status: 404
		end
	end

	private
	def user_params
		params.require(:user).permit(:email, :password)
	end

end
