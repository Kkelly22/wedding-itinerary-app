class UserSerializer < ActiveModel::Serializer
  attributes :username, :bride, :groom, :wedding_location, :wedding_date, :wedding_code
end

