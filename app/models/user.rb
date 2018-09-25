# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  username        :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  buying_power    :float
#

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :first_name, :last_name, :password_digest, :buying_power, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  attr_reader :password, :holdings, :watchlist, :num_trades

  after_initialize :ensure_session_token
  after_create :create_portfolio

  has_many :watchlist_items,
    class_name: 'WatchlistItem',
    primary_key: :id,
    foreign_key: :user_id

  # has_many :watched_stocks,
  #   through: :watchlist_items,
  #   source: :stocks,

  has_one :portfolio,
    class_name: 'Portfolio',
    primary_key: :id,
    foreign_key: :user_id

  has_many :portfolio_snapshots,
    through: :portfolio,
    source: :portfolio_snapshots

  def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return user if user && user.is_password?(password)
		return nil
	end

	def self.generate_session_token
		SecureRandom.urlsafe_base64
	end

	def reset_session_token!
		self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

  def create_portfolio
    portfolio = Portfolio.create!(user_id: self.id)
  end

  def holdings
    self.portfolio.holdings
  end

  def num_trades
    self.portfolio.trades.count
  end

  def watchlist
    stocks = []

    self.watchlist_items.each_with_index do |watchlist_item, i|
      stocks.push(self.watchlist_items[i].stock_id)
    end

    stocks
  end

  def add_to_buying_power(amount)
    self.buying_power += amount
    self.save
  end

  private
	def ensure_session_token
		self.session_token ||= self.class.generate_session_token
	end

end
