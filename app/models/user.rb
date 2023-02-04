class User < ApplicationRecord
  validates :user_name, presence: true, uniqueness: true
  validates :age, presence: true, numericality: { greater_than_or_equal_to: 18 }

  has_many :books
  has_many :groups, through: :books

  has_secure_password
end
