class GamesController < ApplicationController
  def home

  end

  def index
    # user = User.find[params:user_id]
    @user = User.first
  
  end


end