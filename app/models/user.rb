class User < ApplicationRecord
	has_many :plans

	has_secure_password
 	validates :username, presence: true, uniqueness: true
 	validates :password, presence: true
 	validates :bride, :groom, :wedding_location, :wedding_date, :email, presence: true
end
