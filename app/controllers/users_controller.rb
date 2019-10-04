class UsersController < ApplicationController
  def create 
    user = User.create(user_params)
    if user && user.valid?
      UserMailer.with(user: user).welcome_email.deliver_now
      render json: { current: user }, status: 201
    else
      render json: { error: 'Failed to Sign Up' }, status: 400
    end
  end

  def find
    login_id = 0
    e = ActiveRecord::Base.establish_connection
    c = e.connection
    rows = c.execute('select id, wedding_code from users')
    rows.each do |row|
      if row["wedding_code"] == params[:wedding_code]
        login_id = row["id"]
      end
    end
    if login_id != 0
      user = User.find_by(id: login_id)
      if user
        render json: { current: user }, status: 200
      else
        render json: { error: 'Failed to Find Wedding' }, status: 400
      end
    else
        render json: { error: 'Failed to Find Wedding' }, status: 400
    end
  end


  def login
    user = User.find_by(username: params[:user])
    if user && user.authenticate(params[:password])
      render json: { current: user } , status: 200
    else
      render json: { error: 'Failed to Log In' }, status: 400
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :bride, :groom, :wedding_location, :wedding_date, :wedding_code, :email)
  end

end
