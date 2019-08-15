class UserMailer < ApplicationMailer
	default from: 'kk504408@gmail.com'

	def welcome_email
    	@user = params[:user]
    	mail(to: 'kk504408@gmail.com', subject: 'Welcome to Your Wedding Itinerary')
    #	mail(to: @user.email, subject: 'Welcome to Your Wedding Itinerary')
  	end
end
