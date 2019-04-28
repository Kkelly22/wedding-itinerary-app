class PlansController < ApplicationController
	def index
		@plans = get_current_user.plans.all
		render json: @plans 
    end

	def create
		@plan = get_current_user.plans.build(plan_params)
    	@plan.save
		render json: @plan, status: 201
	end

	def destroy
		@plan = plan.find_by(id: params[:id])
		@plan.destroy
		render json: @plan, status: 201
	end

	private

	def plan_params
		params.require(:plan).permit(:description, :vendor, :location, :time, :completed)
	end

end
