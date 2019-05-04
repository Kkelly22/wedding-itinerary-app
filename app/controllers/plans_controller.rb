class PlansController < ApplicationController
	protect_from_forgery with: :null_session
	
	def index
		@user = User.find_by(id: params[:user_id])
		@plans = @user.plans.all
		render json: @plans 
    end

	def create
		@user = User.find_by(id: params[:plan][:user_id])
		@plan = @user.plans.build(description: params[:plan][:description], vendor: params[:plan][:vendor], location: params[:plan][:location], time: params[:plan][:time], completed: params[:plan][:completed], )
		@plan.save
		render json: @plan, status: 201
	end

	def destroy
		@plan = Plan.find_by(id: params[:id])
		@plan.destroy
		render json: @plan, status: 201
	end

	private

	def plan_params
		params.require(:plan).permit(:description, :vendor, :location, :time, :completed, :user_id)
	end

end