# == Schema Information
#
# Table name: watchlist_items
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class WatchlistItem < ApplicationRecord

  validates :user_id, :stock_id, presence: true
  validates_uniqueness_of :stock_id, scope: :user_id 

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :stock,
    class_name: 'Stock',
    primary_key: :id,
    foreign_key: :stock_id

end
