class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    t.string :first_name
    t.string :last_name
    t.string :github
    t.string :linkedin
    t.string :email
    t.string :twitter
    t.timestamps
    end
  end
end
