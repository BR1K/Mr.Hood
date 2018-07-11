class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :first_name, :last_name, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

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

  private
	def ensure_session_token
		self.session_token ||= self.class.generate_session_token
	end

end
