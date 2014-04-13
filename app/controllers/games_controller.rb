class GamesController < ApplicationController
  def home

  end

  def index
    User.find_by first_name: "Erik"
    binding.pry
  end


end