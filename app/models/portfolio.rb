class Portfolio < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  has_many :portfolio_snapshots,
    class_name: 'PortfolioSnapshot',
    primary_key: :id,
    foreign_key: :portfolio_id

  has_many :trades,
    class_name: 'Trade',
    primary_key: :id,
    foreign_key: :portfolio_id

  has_many :stocks,
    through: :trades,
    source: :stock 
end
