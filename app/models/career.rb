# == Schema Information
#
# Table name: careers
#
#  id              :integer          not null, primary key
#  job_title       :string(255)
#  job_description :text
#  company         :string(255)
#  start_date      :date
#  end_date        :date
#  user_id         :integer
#  created_at      :datetime
#  updated_at      :datetime
#

class Career < ActiveRecord::Base
    attr_accessible :job_title, :job_description, :company, :start_date, :end_date, :user_id

    belongs_to :user
end
