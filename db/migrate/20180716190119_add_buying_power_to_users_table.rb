class AddBuyingPowerToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :buying_power, :float
  end
end
