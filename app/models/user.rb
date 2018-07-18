class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :first_name, :last_name, :password_digest, :buying_power, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token
  after_create :create_portfolio

  has_many :watchlist_items,
    class_name: 'WatchlistItem',
    primary_key: :id,
    foreign_key: :user_id

  has_one :portfolio,
    class_name: 'Portfolio',
    primary_key: :id,
    foreign_key: :user_id



  def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
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

  private
	def ensure_session_token
		self.session_token ||= self.class.generate_session_token
	end

end
