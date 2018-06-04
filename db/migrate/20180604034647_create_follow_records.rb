class CreateFollowRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :follow_records do |t|
      t.references :user, index: true, foreign_key: true
      t.references :station, foreign_key: true

      t.timestamps
    end
  end
end
