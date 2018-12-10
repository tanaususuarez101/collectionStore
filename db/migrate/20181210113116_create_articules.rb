class CreateArticules < ActiveRecord::Migration[5.1]
  def change
    create_table :articules do |t|
      t.string :title
      t.text :body
      t.string :thumdnail
      t.float :price

      t.timestamps
    end
  end
end
