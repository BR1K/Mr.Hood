class PortfolioSnapshot < ApplicationRecord

  validates :portfolio_id, :date, :value, presence: true

  belongs_to :portfolio,
    class_name: 'Portfolio',
    primary_key: :id,
    foreign_key: :portfolio_id

end 
