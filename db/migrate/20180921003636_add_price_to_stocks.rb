class AddPriceToStocks < ActiveRecord::Migration[5.2]
  def change
     add_column :stocks, :price, :float
  end
end
