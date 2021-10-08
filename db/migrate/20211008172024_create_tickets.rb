class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :concert
      t.float :price
      t.datetime :time
      t.belongs_to :venue, null: false, foreign_key: true

      t.timestamps
    end
  end
end
