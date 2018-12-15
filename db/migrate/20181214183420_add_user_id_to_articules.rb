class AddUserIdToArticules < ActiveRecord::Migration[5.1]
  def change
    add_reference :articules, :user, foreign_key: true
  end
end
