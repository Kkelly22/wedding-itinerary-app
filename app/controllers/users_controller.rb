class UsersController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    user = User.create(user_params)
    if user && user.valid?
      render json: { current: user }
    else
      render json: { error: 'Failed to Sign Up' }, status: 400
    end
  end


  def login
    user = User.find_by(username: params[:user])
    if user 
      render json: { current: user }
    else
      render json: { error: 'Failed to Log In' }, status: 400
    end
  end


  def logout
    render json: { current: {} }
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :bride, :groom, :wedding_location, :wedding_date)
  end

end
