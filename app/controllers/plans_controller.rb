class PlansController < ApplicationController
	def index
		@plans = current_user.plans.all
		respond_to do |format|
      		format.html { render :index }
      		format.json { render json: @plans }
    	end
    end

	def new
		@plan = plan.new
	end 

	def create
		@plan = plan.create(plan_params)
		render json: @plan, status: 201
	end

	def show
		@plan = plan.find_by(id: params[:id])
		respond_to do |format|
      		format.html { render :show }
      		format.json { render json: @plan }
    	end
	end

	def edit
		@plan = plan.find_by(id: params[:id])
	end

	def update
		@plan = plan.find_by(id: params[:id])
		@plan.update(plan_params)
		respond_to do |format|
      		format.html { render :show }
      		format.json { render json: @plan }
    	end
	end

	def destroy
		@plan = plan.find_by(id: params[:id])
		@plan.destroy
	end

	private

	def plan_params
		params.require(:plan).permit(:description, :vendor, :location, :time, :completed)
	end

end
