class CreateCareers < ActiveRecord::Migration
  def change
    create_table :careers do |t|
      t.string :job_title
      t.text :job_description
      t.string :company
      t.date :start_date
      t.date :end_date
      t.integer :user_id
      t.timestamps  
    end
  end
end
