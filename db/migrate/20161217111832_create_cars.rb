class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      t.string :producer
      t.string :model
      t.string :color
      t.integer :price

      t.timestamps
    end
  end
end
