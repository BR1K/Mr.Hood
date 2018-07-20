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

  after_create :create_snapshot


  def holdings
    # holdings = {}
    holdings = Hash.new(0)

    self.trades.each do |trade|
      if trade.trade_type == "buy"
        holdings[trade.stock_id] += trade.size
      else
        holdings[trade.stock_id] -= trade.size
      end
    end
    holdings.delete_if { | stock, size | size == 0 }

    holdings
  end

  def value
    value = 0

    self.holdings.each do |key, val|
      trade = Trade.find(stock_id: key)
      value += trade.price * val
    end

    value
  end

  def create_snapshot
    PortfolioSnapshot.create(
      portfolio_id: self.id,
      value: self.user.buying_power,
      date: Date.today.to_s
    )
  end
end
