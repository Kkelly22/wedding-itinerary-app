class PlansController < ApplicationController	
	def index
		@user = User.find_by(id: params[:user_id])
		@plans = @user.plans.all
		render json: @plans, status: 200
    end

	def create
		@user = User.find_by(id: params[:plan][:user_id])
		@plan = @user.plans.build(description: params[:plan][:description], vendor: params[:plan][:vendor], location: params[:plan][:location], time: params[:plan][:time], completed: params[:plan][:completed], )
		@plan.save
		render json: @plan, status: 201
	end

	def show
		@plan = Plan.find_by(id: params[:id])
		render json: @plan, status: 200
	end

	def update
		@plan = Plan.find_by(id: params[:id])
		@plan.update(plan_params)
		render json: @plan, status: 200
	end

	def destroy
		@plan = Plan.find_by(id: params[:id])
		@plan.destroy
		render json: @plan, status: 200
	end

	private

	def plan_params
		params.require(:plan).permit(:description, :vendor, :location, :time, :completed, :user_id)
	end

end