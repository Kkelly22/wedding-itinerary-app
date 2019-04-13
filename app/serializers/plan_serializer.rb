class PlanSerializer < ActiveModel::Serializer
  attributes :id, :description, :vendor, :location, :time, :completed
end