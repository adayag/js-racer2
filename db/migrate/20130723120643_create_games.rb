class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.float :time
      t.string :winner
      t.string :url

      t.timestamps
    end
  end
end
