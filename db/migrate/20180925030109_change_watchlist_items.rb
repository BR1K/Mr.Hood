class ChangeWatchlistItems < ActiveRecord::Migration[5.2]
  def change
    remove_index "watchlist_items", name: "index_watchlist_items_on_user_id"
  end
end
