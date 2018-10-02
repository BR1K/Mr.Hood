class ChangeWatchlistItems2 < ActiveRecord::Migration[5.2]
  def change
    remove_index "watchlist_items", name: "index_watchlist_items_on_stock_id"
  end
end
