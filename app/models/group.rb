class Group < ApplicationRecord
  validates :group_name, :comments, :user_id, :book_id, presence: true

  has_many :books
  has_many :users, through: :books
end