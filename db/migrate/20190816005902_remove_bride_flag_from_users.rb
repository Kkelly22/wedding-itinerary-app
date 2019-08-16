class RemoveBrideFlagFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :bride_flag, :boolean
  end
end
