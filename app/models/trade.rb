class Trade < ApplicationRecord

  validates :stock_id, :portfolio_id, :price, :size, :trade_type, presence: true


  belongs_to :stock,
    class_name: 'Stock',
    primary_key: :id,
    foreign_key: :stock_id

  belongs_to :portfolio,
    class_name: 'Portfolio',
    primary_key: :id,
    foreign_key: :portfolio_id

  has_one :user,
    through: :portfolio,
    source: :user
end
