class WatchlistItem < ApplicationRecord

  validates :user_id, :stock_id, presence: true

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :stock,
    class_name: 'Stock',
    primary_key: :id,
    foreign_key: :stock_id

end
