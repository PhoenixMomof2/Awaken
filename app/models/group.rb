class Group < ApplicationRecord
  validates :group_name, :comments, :user_id, :book_id, presence: true

  has_many :users
  has_many :books, through: :users
end