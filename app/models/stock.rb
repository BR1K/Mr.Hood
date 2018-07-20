class Stock < ApplicationRecord

  validates :symbol, presence: true

  has_many :trades,
    class_name: 'Trade',
    primary_key: :id,
    foreign_key: :stock_id

  has_many :watchlist_items,
    class_name: 'WatchlistItem',
    primary_key: :id,
    foreign_key: :stock_id


  # def current_price
  #
  # end
end
