class UserMailer < ApplicationMailer
	default from: 'kk504408@gmail.com'

	def welcome_email
    	@user = params[:user]
    	mail(to: @user.email, subject: 'Welcome to Your Wedding Itinerary')
  	end
end
