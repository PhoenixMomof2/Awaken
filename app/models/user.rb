class User < ApplicationRecord
  validates: user_name, avatar, age, occupation, presence: true
  validates: age, numericality: { greater_than_or_equal_to: 18 }

  has_many :groups
  has_many :books, through: :groups
end
