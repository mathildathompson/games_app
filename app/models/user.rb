 # == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  first_name :string(255)
#  last_name  :string(255)
#  github     :string(255)
#  linkedin   :string(255)
#  email      :string(255)
#  twitter    :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class User < ActiveRecord::Base
    attr_accessible :first_name, :last_name, :github, :linkedin, :email, :twitter, :password, :password_confirmation
    
    has_many :careers
    has_many :portfolios
    has_many :educations

    has_secure_password
    validates :email, :presence => true, :uniqueness => true, :length => { :minimum => 4 }
end
