class UsersController < ApplicationController
  def create
    user = User.create(user_params)
    if params[:bride_flag] == true
      user.update(params[:user_id], :wedding_code => (0...8).map { (65 + rand(26)).chr }.join)
    end

    if user && user.valid?
      render json: { current: user }
    else
      render json: { error: 'Failed to Sign Up' }, status: 400
    end
  end


  def login
    user = User.find_by(username: params[:user])
    if user && user.authenticate(params[:password])
      render json: { current: user }
    else
      render json: { error: 'Failed to Log In' }, status: 400
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :bride, :groom, :wedding_location, :wedding_date, :wedding_code, :bride_flag)
  end

end
