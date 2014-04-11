# == Schema Information
#
# Table name: educations
#
#  id          :integer          not null, primary key
#  institution :string(255)
#  course      :string(255)
#  start_date  :date
#  end_date    :date
#  user_id     :integer
#

class Education < ActiveRecord::Base
    attr_accessible :institution, :course, :start_date, :end_date, :user_id

    belongs_to :user
end
