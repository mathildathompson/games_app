class ContactsController < ApplicationController
  
  def index
    @user = User.find_by last_name: params[:last_name].capitalize
    @first_name = @user.first_name
    @last_name = @user.last_name
    @github = @user.github
    @linkedin = @user.linkedin
    @twitter = @user.twitter

  end


end