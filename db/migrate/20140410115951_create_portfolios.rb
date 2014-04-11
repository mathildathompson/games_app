class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|
        t.string :title
        t.string :link
        t.string :image
        t.integer :user_id
    end
  end
end
