class CreateEducations < ActiveRecord::Migration
  def change
    create_table :educations do |t|
        t.string :institution
        t.string :course
        t.date :start_date
        t.date :end_date
        t.integer :user_id
    end
  end
end
