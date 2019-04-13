class CreatePlans < ActiveRecord::Migration[5.2]
  def change
    create_table :plans do |t|
      t.belongs_to :user
      t.string :description
      t.string :vendor
      t.string :location
      t.datetime :time
      t.boolean :completed

      t.timestamps
    end
  end
end
