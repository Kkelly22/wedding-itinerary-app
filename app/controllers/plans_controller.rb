class PlansController < ApplicationController
	protect_from_forgery with: :null_session
	
	def index
		@plans = @current_user.plans.all
		render json: @plans 
    end

	def create
		@plan = @urrent_user.plans.build(plan_params)
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

application_controller - removed JWT and added regular session code 
plans controller - changed get current user to current user
users controller - removed JWT and added regular session code 
auth.rb - removed JWT, no longer needed file
App.js - moved the React Router into the App file instead of the index file
plan actions - removed JWT
user actions - removed JWT
Login container - added withRouter to dispatch connection
Signup container - added withRouter to dispatch connection
index.js - moved React Router from index into App
logo - removed as it was unused
reducer Plans - removed debuggers
reducer Users - added current to the state
routes - added logout route