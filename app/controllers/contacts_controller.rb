class ContactsController < ApplicationController
  
  def index
    # Better practice just to pass the user object into the view. You can access the attributes inside the view; 
    @user = User.find_by last_name: params[:last_name].capitalize
  end


end