class CreateTrades < ActiveRecord::Migration[5.2]
  def change
    create_table :trades do |t|
      t.integer :stock_id, null: false
      t.integer :portfolio_id, null: false
      t.float :price, null: false
      t.integer :size, null: false
      t.string :trade_type, null: false

      t.timestamps
    end

    add_index :trades, :stock_id
    add_index :trades, :portfolio_id
  end
end
