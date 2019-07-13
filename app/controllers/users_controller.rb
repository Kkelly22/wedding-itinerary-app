class UsersController < ApplicationController
  def create
    # binding.pry
    # if !!user_params[:username] && !!user_params[:password] && !!user_params[:wedding_code] && user_params[:bride_flag] === false
    #   binding.pry
    #   sqlquery = "
    #   SELECT TOP 1
    #     id 
    #   FROM
    #     users
    #   WHERE 
    #     wedding_code LIKE " + user_params[:wedding_code] + "
    #   ORDER BY 
    #     id ASC;
    #   "
    #   results = ActiveRecord::Base.connection.execute(sqlquery)
    #   binding.pry
    # end

    user = User.create(user_params)
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
