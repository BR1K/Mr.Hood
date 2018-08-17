class PortfolioSnapshot < ApplicationRecord

  validates :portfolio_id, :date, :value, presence: true

  belongs_to :portfolio,
    primary_key: :id,
    foreign_key: :portfolio_id,
    class_name: 'Portfolio'

end
