class UsersController < ApplicationController
  def create
    login_id = 0
    if user_params[:wedding_code] != "" && user_params[:bride_flag] === false
      e = ActiveRecord::Base.establish_connection
      c = e.connection
      rows = c.execute('select id, wedding_code from users')
      rows.each do |row|
        if row["wedding_code"] == user_params[:wedding_code]
          login_id = row["id"]
        end
      end
    end

    if user_params[:wedding_code] != "" && user_params[:bride_flag] === false && login_id != 0
      user = User.find_by(id: login_id)
      if user
        render json: { current: user }
      else
        render json: { error: 'Failed to Sign Up' }, status: 400
      end
    else  
      user = User.create(user_params)
      if user && user.valid?
        render json: { current: user }
      else
        render json: { error: 'Failed to Sign Up' }, status: 400
      end
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
