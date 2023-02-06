class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :comments
      t.integer :user_id
      t.integer :book_id

      t.timestamps
    end
  end
end
