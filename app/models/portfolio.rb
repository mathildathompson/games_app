# == Schema Information
#
# Table name: portfolios
#
#  id      :integer          not null, primary key
#  title   :string(255)
#  link    :string(255)
#  image   :string(255)
#  user_id :integer
#

class Portfolio < ActiveRecord::Base
    attr_accessible :title, :link, :image, :user_id

    belongs_to :user
end
