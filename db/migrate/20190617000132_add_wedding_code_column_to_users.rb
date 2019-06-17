class AddWeddingCodeColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :wedding_code, :string
  end
end
