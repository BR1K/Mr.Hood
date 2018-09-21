# == Schema Information
#
# Table name: stocks
#
#  id         :bigint(8)        not null, primary key
#  symbol     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  price      :float
#

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
