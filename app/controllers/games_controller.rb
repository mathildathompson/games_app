class GamesController < ApplicationController
  def home

  end

  def index
    @user = User.find_by last_name: params[:last_name].capitalize
    @first_name = @user.first_name
  end


end