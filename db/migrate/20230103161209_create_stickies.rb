class CreateStickies < ActiveRecord::Migration[7.0]
  def change
    create_table :stickies do |t|
      t.string :message
      t.string :color
      t.timestamps
    end
  end
end
