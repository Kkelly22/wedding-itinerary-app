class AddBrideFlagColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bride_flag, :boolean
  end
end
